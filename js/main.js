/*var slider = document.getElementsByClassName("pictures");
const INDEXMAX = slider.length - 1;

var i = 0;


for (var i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
}


slider[0].style.display = "block";


var myInterval = setInterval(carousel, 2000)

let index = 0;


function carousel(n) {

    slider[index].style.display = "block";
    index++;
    if (index > INDEXMAX) {
        index = 0;
    }
}*/


var i = 0;
var images = ["img/4.jpg", "img/5.jpg", "img/6.jpg", "img/1.jpeg"];
var time = 3000;

//function for lincking html and main.js, with changing the pictures

function changImg(){
    document.slide.src = images[i];
    if (i < images.length -1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("changImg()", time);// the opration for changing the time
}

changImg();

// function for th button

function plus(n){
    changImg(index += n);
}