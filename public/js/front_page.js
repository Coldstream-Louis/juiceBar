/**
 * Created by Ambrose on 2017/12/10.
 */
var swedenFlg = document.getElementById("sweden_flag");
var ukFlg =  document.getElementById("uk_flag");
var welcomeTextHeader = document.getElementById("welcome_intro").getElementsByTagName("h1")[0];
var welcomeTextIntro = document.getElementById("welcome_intro").getElementsByTagName("h3")[0];
var enterButton = document.getElementById("enter_button");

function changeBackground(e) {
    if(e === swedenFlg){
        swedenFlg.style.backgroundColor = "#ffc107";
        ukFlg.style.backgroundColor = "#ffffff";
        welcomeTextHeader.innerHTML = "TÖRSTIG";
        welcomeTextIntro.innerHTML = "njut av din juice och smoothie";
        enterButton.innerHTML = "Börja din beställning";
    }else {
        ukFlg.style.backgroundColor = "#ffc107";
        swedenFlg.style.backgroundColor = "#ffffff";
        welcomeTextHeader.innerHTML = "THIRSTY";
        welcomeTextIntro.innerHTML = "enjoy your juice and smoothie";
        enterButton.innerHTML = "Start your order";
    }
}


