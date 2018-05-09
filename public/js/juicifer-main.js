/*jslint es5:true, indent: 2 */
/*global io, Vue */
/*exported sharedVueStuff */
'use strict';

var socket = io();

Vue.component('order-item', {
  props: ['uiLabels', 'order', 'orderId', 'lang'],
  template: '<div>{{orderId}} {{order.type}} {{uiLabels.ingredients}}: {{ order.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }} </div>'
});

// Stuff that is used both in the ordering system and in the kitchen
var sharedVueStuff = {
  data: {
    orders: {},
    uiLabels: {},
    ingredients: {},
    DIYIngredients: {},
    lang: "en"
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
      this.uiLabels = data.uiLabels;
      this.ingredients = ingredients;
      this.DIYIngredients = data.ingredients;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
      this.DIYIngredients = data.ingredients;
    }.bind(this));

    socket.on('switchLang', function (data) {
    this.uiLabels = data;
    }.bind(this));
  },
  methods: {
    switchLang: function () {
      if (this.lang === "en") {
        this.lang = "sv";
      } else {
        this.lang = "en";
      }
      socket.emit('switchLang', this.lang);
    },
    getFirstOrder: function(){
      var order="";
      var ID="";
      for (var e in this.orders){
            if(!this.orders[e].done){            
                order = this.orders[e];
                ID = e;
                break;
            }
      }
      return [order, ID];
    },
    getOrderByID: function(ID){
      return this.orders[ID];
    },
    isAllDone: function() {
      var list = [];
      for (var e in this.orders){
            if(!this.orders[e].done){            
                list += e;
            }
      }
      return list;
    }
  }
};