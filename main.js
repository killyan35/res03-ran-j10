let section1= document.querySelector("body > main > section:first-of-type");
let section2= document.querySelector("body > main > section:nth-child(2)");
let section3= document.querySelector("body > main > section:last-of-type");
let bouton1=document.querySelector("body > main > section:first-of-type > button");
let bouton2=document.querySelector("body > main > section:nth-child(2) > button");
let bouton3=document.querySelector("body > main > section:last-of-type > button");
section1.addEventListener("click", function(event){
       let target = event.target;
       let bouton2 = target.bouton2;
       if(bouton2===("target"===1))
       {
            let opacity = parseFloat(section2.style.opacity);  
            opacity -= 0.65; 
            target.style.opacity = opacity;
       };

});