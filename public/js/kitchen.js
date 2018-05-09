var isPressed = false;
var currentEle = null;
var originalTop = 0;
var isSubmitted = false;

function getCurrentStyle(node) {
    var style  = null;
    if(window.getComputedStyle) {
        style = window.getComputedStyle(node, null);
    }else{
        style = node.currentStyle;
    }
    return style;
}

var vm2 = new Vue({
    el:'#right',
    mixins:[sharedVueStuff],
    data:{
        order:"",
        ID:""
    },
    methods:{
        finish: function(){
            this.order.done = true;
            socket.emit('orderIsDone', this.ID);
            isSubmitted = true;
        }
    }
});

var vm = new Vue({
    el:'#left',
    mixins:[sharedVueStuff],
    data:{
        top:0
    },
    updated: function(){
        var allDone = true;
            if(vm2.getFirstOrder()[1] !== ""){
                if(isSubmitted){
                    document.getElementById("detailed_order").style['animation'] = 'updateContent 0.5s ease-in-out infinite';
                    document.getElementById("detailed_order").style['-webkit-animation'] = 'updateContent 0.5s ease-in-out infinite';
                    setTimeout(function () {
                    vm2.order = vm2.getFirstOrder()[0];
                    vm2.ID = vm2.getFirstOrder()[1];
                    }, 300);
                    isSubmitted = false;
                }else{
                    vm2.order = vm2.getFirstOrder()[0];
                    vm2.ID = vm2.getFirstOrder()[1];
                }
            } 
            else{
                vm2.order = "";
                vm2.ID = "";
                isSubmitted = false;
            }
    },
    methods:{
        enter: function(ID) {
            if(ID != vm2.ID){
                document.getElementById("detailed_order").style['animation'] = 'updateContent 0.5s ease-in-out infinite';
                document.getElementById("detailed_order").style['-webkit-animation'] = 'updateContent 0.5s ease-in-out infinite';
                setTimeout(function () {
                    vm2.ID = ID;
                    vm2.order = vm2.getOrderByID(ID);
                }, 300)
            }
            isPressed = true;
            currentEle = document.getElementsByClassName("order_unit "+ID)[0];
            originalTop = currentEle.getBoundingClientRect().top;
        }
    }
});

move = function (e) {
    if(isPressed){
        var height = parseInt(getCurrentStyle(currentEle).height);
        var centerY = currentEle.getBoundingClientRect().top + height/2;
        var offsetY = event.clientY - centerY;
        currentEle.style['transform'] = 'translateY('+offsetY/2+'px'+')';
        currentEle.style['opacity'] = Math.max(1 - Math.abs(originalTop - currentEle.getBoundingClientRect().top)*4/height, 0);
        if(Math.abs(originalTop - currentEle.getBoundingClientRect().top) > height/4 ){
            vm2.finish();
            isPressed = false;
        }
    }
};

up = function (e) {
    isPressed = false;
    if(currentEle != null){
        currentEle.style['transform'] = "";
        currentEle.style['opacity'] = 1;
    }
};

document.onmousemove = move;
document.onmouseup = up;
document.addEventListener('webkitAnimationIteration', function () {
    document.getElementById("detailed_order").style['animation'] = 'updateContent 0.5s ease-in-out infinite paused';
    document.getElementById("detailed_order").style['-webkit-animation'] = 'updateContent 0.5s ease-in-out infinite paused';
});