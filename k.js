var numberofDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    abc(buttonInnerHTML);
   
    
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    abc(event.key);

}
);
function makeSound(key){
    switch(key){

        case "w":
            var audi1=new Audio("sounds/tom-1.mp3"); 
            audi1.play();
            break;

        case "a":
            var audi2=new Audio("sounds/tom-2.mp3");
            audi2.play();
            break;

        case "s":
            var audi3=new Audio("sounds/tom-3.mp3");
            audi3.play();
            break;

        case "d":
            var audi4=new Audio("sounds/tom-4.mp3");
            audi4.play();
            break;

        case "j":
        var audi5=new Audio("sounds/snare.mp3");
            audi5.play();
            break;

        case "k":
        var audi6=new Audio("sounds/crash.mp3");
            audi6.play();
            break;

        case "l":
        var audi7=new Audio("sounds/kick-bass.mp3");
            audi7.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}
function abc(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");

    },100);

}

