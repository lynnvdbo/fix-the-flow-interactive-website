/* deze zorgt ervoor dat je 1 button kan liken, maar nog niet andere */



/* STAP 1: zoek de button op - document.querySelector() */
// let likeButton = document.querySelector(".leeg");


/* STAP 2: als iemand er op clickt - addEventListener() */
// likeButton.addEventListener("click", toggleLike);


/* STAP 3: hier geef je aan wat de functie is*/
// function toggleLike () {

/* hartje geef je aan welke class hij gaat togglen, in dit geval de class fill  */
// 	likeButton.classList.toggle("fill");






/* deze zorgt evrvoor dat je alles buttons kan liken en ze blijven geliked geholpen door suus */



/* selecteerd alle buttons met de class .leeg */
let likeButtons = document.querySelectorAll(".hart-leeg");

/* hij loopt door alle buttons heen */
likeButtons.forEach(function(button){
    /* als iemand op een van de like buttons clickt gebeurt er een function */
    button.addEventListener("click", function(){
        /* function is togglen met voor alle classes met fill*/
        button.classList.toggle("hart-fill")
    })
})






// header verdwijnt wanneer je naar beneden scrollt en komt weer tevoorschijn als je omhoog scrollt
// van youtube filmpje -> https://www.youtube.com/watch?v=rk_MSrE6uhc

// STAP 1: zoek de header op - document.querySelector() 
let header = document.querySelector('header');  

let prevScroll = window.pageYOffset;

// STAP 2: addEventListener 
window.addEventListener('scroll', function(){
    let currScroll = window.pageYOffset;

    if(prevScroll > currScroll){
        header.style.top = '0';
    }else{
        header.style.top = '-150px';
    }
    prevScroll = currScroll;
})



