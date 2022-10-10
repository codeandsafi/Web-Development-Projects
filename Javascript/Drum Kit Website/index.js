let numberOfDrums = document.querySelectorAll("button").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var butonInnerHTML = this.innerHTML;
        makeSound(butonInnerHTML);
    });
   
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
})

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("mousedown", function () {
        var butonInnerHTML = this.innerHTML;
        changeColorWhite(butonInnerHTML);
        
    });
   
}

document.addEventListener("keydown", function(event) {
    changeColorWhite(event.key);
})

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("mouseup", function () {
        var butonInnerHTML = this.innerHTML;
        previousColor(butonInnerHTML);
    });
   
}

document.addEventListener("keyup", function(event) {
    previousColor(event.key);
})

makeSound = (key) => {
    switch(key){
        case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

        case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

        case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

        case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

        case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

        default:
            console.log("Wrong Input");
    }
}

changeColorWhite = (key) => {
    switch(key){
        case "w":
        document.querySelectorAll("button")[0].style.color = "white";
        break;

        case "a":
        document.querySelectorAll("button")[1].style.color = "white";
        break;

        case "s":
        document.querySelectorAll("button")[2].style.color = "white";
        break;

        case "d":
        document.querySelectorAll("button")[3].style.color = "white";
        break;

        case "j":
        document.querySelectorAll("button")[4].style.color = "white";
        break;

        case "k":
        document.querySelectorAll("button")[5].style.color = "white";
        break;

        case "l":
        document.querySelectorAll("button")[6].style.color = "white";
        break;

        default:
            console.log("Wrong Input");
    }
}

previousColor = (key) => {
    switch(key){
        case "w":
        document.querySelectorAll("button")[0].style.color = "#DA0463";
        break;

        case "a":
        document.querySelectorAll("button")[1].style.color = "#DA0463";
        break;

        case "s":
        document.querySelectorAll("button")[2].style.color = "#DA0463";
        break;

        case "d":
        document.querySelectorAll("button")[3].style.color = "#DA0463";
        break;

        case "j":
        document.querySelectorAll("button")[4].style.color = "#DA0463";
        break;

        case "k":
        document.querySelectorAll("button")[5].style.color = "#DA0463";
        break;

        case "l":
        document.querySelectorAll("button")[6].style.color = "#DA0463";
        break;

        default:
            console.log("Wrong Input");
    }
}