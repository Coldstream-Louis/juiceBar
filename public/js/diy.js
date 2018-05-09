/*jslint es5:true, indent: 2 */
/*global sharedVueStuff, Vue, socket */
'use strict';

var current = 0;
function drinkOrder(name, size, ingredient, account, price){
    this.name=name;
    this.size=size;
    this.ingredient=ingredient;
    this.account=account;
    this.price=price;
}

var orderList=new Array();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getOrderNumber() {
    // It's probably not a good idea to generate a random order number, client-side.
    // A better idea would be to let the server decide.
    return "#" + getRandomInt(1, 1000000);
}

var topVm = new Vue({
    el: '.topBar',
    data:{},
    methods:{
        backConfirmation: function(){
            var value = confirm("If you leave now, you will lose your cart. Are you sure you want to leave?");
            if(value){
                alert("needs to lead to previous page");
            }
        },
        askHelp: function(){
            var value = confirm("JESUS what a scrub. Do you really need help? Go ask Google.");
            if(value){
                window.location.href="https://www.google.com";
            }
        }
    }
});


//ingredient object for vue
Vue.component('ingredient', {
    props: ['item', 'type', 'lang'],
    template: ' <div class="ingredient">\
                  <label>\
                    <button v-on:click="chooseItem"> + </button>\
                    {{item["ingredient_en"]}} ({{ (type=="smoothie") ? item.vol_smoothie:item.vol_juice }} ml), \
                    {{item.selling_price}}:-, {{item.stock}} pcs  <img v-bind:src=getImgPath(item) :width="100" :height="100"></img>\
                  </label>\
              </div>',
    methods: {
        getImgPath: function(item){
            return "img/"+item.ingredient_id+"_"+item.ingredient_en+".png";
        },
        chooseItem: function(){
            this.$emit('choose');
        }
    }
});


//ingredientlist vue
var vm = new Vue({
    el: '#mainid',
    mixins: [sharedVueStuff], // include stuff that is used both in the ordering system and in the kitchen
    data: {
        ingredientSort:'liquids',
        drinkSort:'smoothie',
        type:0,
        drinks:[],
        chosenIngredients:[],
        glassSize:"S",
        changeMessage : "sample text",
        removeMessage : "sample text",
        menuShown: false,
        registerShown: false,
        preJuiceShown: false,
        preSmoothieShown: false,
        DIYShown: true,
        showChangePopup: false,
        showChangePopupLarge: true,
        showChangePopupMedium: true,
        showRemovePopup: false,
        emptyCartMessage: "Cart is empty",
        isEmpty:true,
        tba:[], //to be added item
        tbr:-1 //to be removed index
    },
    methods: {
        addToOrder: function () {
            if(this.chosenIngredients.length==0){
                return;
            }
            var drink = {
                ingredients: this.chosenIngredients,
                volume: 0,
                price: 0
            };
            switch(this.glassSize){
                case "S": drink.volume=330; drink.price=300; break;
                case "M": drink.volume=500; drink.price=500; break;
                case "L": drink.volume=850; drink.price=750; break;
            }
            this.drinks.push(drink);
            var v = new Array();
            var count=0;
            for(var i=0; i<this.chosenIngredients.length; i++){
                //console.log((this.chosenIngredients)[i].ingredient_en);
                for(var j=0; j<ingredients.length; j++){
                    if((this.chosenIngredients)[i].ingredient_en == ingredients[j])
                        v[count++]=j;
                }
            }
            var x = new drinkOrder('DIY', this.glassSize, v, 1, 100);
            orderList.push(x);
            this.chosenIngredients=[];
            // this.emptyCartMessage="";
            this.isEmpty = false;
        },
        getImagePath: function(item){
            return "img/"+item.ingredient_id+"_"+item.ingredient_en+".png";
        },
        getGlassPath: function(){
            return "img/glass"+this.glassSize+this.chosenIngredients.length+".png";
        },
        addToChosen: function(item, type){
            if( (this.chosenIngredients.length==3 && this.glassSize=="S") ||
                (this.chosenIngredients.length==4 && this.glassSize=="M") ||
                (this.chosenIngredients.length==5 && this.glassSize=="L")){
                this.openChangePopup();
                this.tba.push(item);
            } else {
                this.chosenIngredients.push(item);
            }
        },
        changeSort: function(newsort){
            this.ingredientSort=newsort;
            this.$refs["liquids"].style="background-color:#FFA000";
            this.$refs["fruit"].style="background-color:#FFA000";
            this.$refs["veggies"].style="background-color:#FFA000";
            this.$refs["other"].style="background-color:#FFA000";
            this.$refs[newsort].style="background-color:#fff000";
        },
        placeOrder: function () {
            if(this.drinks.length==0){
                return;
            }
            // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
            var x = getOrderNumber();
            socket.emit('order', {orderId: x, order: orderList});
            alert('Your Order Number is '+x);
            //console.log(orderList);
            //set all counters to 0. Notice the use of $refs
            this.chosenIngredients = [];
            this.drinks = [];
            // this.emptyCartMessage="Cart is empty";
            this.isEmpty=true;
            window.open('successfulPayment.html', '_self');
        },
        showMenu: function(){
            menuShown = true;
            registerShown = false;
            preJuiceShown = false;
            preSmoothieShown = false;
            DIYShown = false;
        },
        showRegister: function(){
            menuShown = false;
            registerShown = true;
            preJuiceShown = false;
            preSmoothieShown = false;
            DIYShown = false;
        },
        showJuice: function(){
            menuShown = false;
            registerShown = false;
            preJuiceShown = true;
            preSmoothieShown = false;
            DIYShown = false;
        },
        showSmoothie: function(){
            menuShown = false;
            registerShown = false;
            preJuiceShown = false;
            preSmoothieShown = true;
            DIYShown = false;
        },
        showDIY: function(){
            menuShown = false;
            registerShown = false;
            preJuiceShown = false;
            preSmoothieShown = false;
            DIYShown = true;
        },
        openChangePopup(){
            switch(this.glassSize){
                case "S":	this.changeMessage = "You have already added the maximum ingredients we can fit in a large "+this.drinkSort+". To add another ingredient, you can upgrade this drink to a medium or large drink. Alternatively, order another drink.";
                    this.showChangePopupMedium = true; this.showChangePopupLarge = true; break;
                case "M": 	this.changeMessage  = "You have already added the maximum ingredients we can fit in a large "+this.drinkSort+". To add another ingredient, you can upgrade this drink to a large drink. Alternatively, order another drink.";
                    this.showChangePopupMedium = false; this.showChangePopupLarge = true; break;
                case "L": 	this.changeMessage  = "You have already added the maximum ingredients we can fit in a large "+this.drinkSort+". You can remove an ingredient to add another, or make another drink.";
                    this.showChangePopupMedium = false; this.showChangePopupLarge = false; break;
                default: 	this.changeMessage  = "Something went wrong. Please contact the devs at w3d0nTc4re@gmail.com.";
            }
            this.showChangePopup = true;
        },
        popupChangeLarge(){
            this.glassSize = "L";
            this.chosenIngredients.push(this.tba.pop());
            this.tba=[];
            this.showChangePopup=false;
        },
        popupChangeMedium(){
            this.glassSize = "M";
            this.chosenIngredients.push(this.tba.pop());
            this.tba=[];
            this.showChangePopup=false;
        },
        popupChangeCancel(){
            this.allowed=false;
            this.tba=[];
            this.showChangePopup=false;
        },
        openRemovePopup(index){
            this.removeMessage = "Are you sure you want to delete " + this.chosenIngredients[index].ingredient_en + "?";
            this.tbr = index;
            this.showRemovePopup = true;
        },
        popupRemoveOk(){
            if(this.tbr==-1){
                this.removeMessage = "You can't remove an item at index -1. Please contact the devs at w3d0nTc4re@gmail.com.";
            }
            this.chosenIngredients.splice(this.tbr, 1);
            this.tbr = -1;
            this.showRemovePopup = false;
        },
        popupRemoveCancel(){
            this.showRemovePopup = false;
        }
    }
});


