/**
 * Created by dushuyang on 10/01/2018.
 */

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

function Popup(number){
    current = number;
    document.getElementById('pWindow').style.display="block";
    document.getElementById('drink').src = drinks[number].image;
    document.getElementById('dName').innerHTML = drinks[number].name;
    document.getElementById('i_1').innerHTML=ingredients[drinks[number].ingredient[0]];
    document.getElementById('i_2').innerHTML=ingredients[drinks[number].ingredient[1]];
    document.getElementById('i_3').innerHTML=ingredients[drinks[number].ingredient[2]];
    document.getElementById('i_4').innerHTML=ingredients[drinks[number].ingredient[3]];
    document.getElementById('pS').innerHTML=("Small:"+drinks[number].priceS);
    document.getElementById('pM').innerHTML=("Medium:"+drinks[number].priceM);
    document.getElementById('pL').innerHTML=("Large:"+drinks[number].priceL);
}

function orderDrink(number, size){
    var name = drinks[number].name;
    var price=0;
    switch(size){
        case 'S': price=drinks[number].priceS;break;
        case 'M': price=drinks[number].priceM;break;
        case 'L': price=drinks[number].priceL;break;
    }
    for(var i=0; i<orderList.length; i++){
        if(name==orderList[i].name && size==orderList[i].size){
            orderList[i].account++;
            orderList[i].price+=price;
            showOrder();
            return;
        }
    }
    var x = new drinkOrder(name, size, drinks[number].ingredient, 1, price);
    orderList.push(x);
    showOrder();
}

function showOrder(){
    var x="";
    for(var i=0; i<orderList.length; i++){
        x=x+orderList[i].name+" "+orderList[i].size+" "+"×"+orderList[i].account+" "+orderList[i].price+"kr"+"\n";
    }
    document.getElementById('ordered').innerText=x;
}

new Vue({
    el: '#buy',
    mixins: [sharedVueStuff],
    methods: {
        placeOrder: function() {
            var x = getOrderNumber();
            socket.emit('order', {orderId: x, order: orderList});
            alert('Your Order Number is '+x);
            //console.log(orderList);
            window.open('successfulPayment.html', '_self');
        }
    }
});
/*
function init(){
    console.log(temp);
    orderList=temp;
    for(var i=0; i<orderList.length; i++){
        alert("es");
        var line = document.createElement('tr');
        var l1 = document.createElement('th');
        var l2 = document.createElement('th');
        var l3 = document.createElement('th');
        var l4 = document.createElement('th');
        l1.className = "c1";
        l2.className = "c2";
        l3.className = "c3";
        l4.className = "c4";
        l1.innerHTML=orderList[i].name;
        l2.innerHTML=orderList[i].size;
        l3.innerHTML=orderList[i].account;
        l4.innerHTML=orderList[i].price;
        line.appendChild(l1);
        line.appendChild(l2);
        line.appendChild(l3);
        line.appendChild(l4);
        var t = document.getElementsByClassName("shoppingList");
        t.appendChild(line);
        alert("ss");
    }
}
*/
