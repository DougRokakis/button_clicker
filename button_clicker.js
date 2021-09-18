function logOut(button){
    button.innerHTML = "logOut";
    console.log("logOut")
}

function disappear(element){
    element.remove()
}

var numLikesNinjaTop = 0;
var ninja_first_def= document.querySelector('#ninja-first-def');

ninja_first_def.innerText = numLikesNinjaTop;

function increaseLikes(){
    numLikesNinjaTop++;
    ninja_first_def.innerText = numLikesNinjaTop;
    alert('ninja was liked');
}