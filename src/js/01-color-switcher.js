const butStart= document.querySelector("[data-start]");
const butStop= document.querySelector("[data-stop]");

butStop.disabled = true;

function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

let zmiana;


function zmianaKoloru(){
    document.body.style.background = getRandomHexColor();
}

butStart.addEventListener("click", (ev)=>{
    ev.preventDefault;
    butStart.disabled = true;
    butStop.disabled = false;
    zmiana = setInterval(zmianaKoloru, 1000)
    
});

butStop.addEventListener("click", (event)=>{
    event.preventDefault;
    clearInterval(zmiana);
    butStop.disabled = true;
    butStart.disabled = false;

})