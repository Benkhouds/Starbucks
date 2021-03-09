const circle =document.querySelector(".circle");
const cup =document.querySelector(".thumbs");
const bigCup= document.querySelector('.green-coffee');
const span= document.querySelector('.starbucks');
const button= document.querySelector('.more-btn');
const logo=document.querySelector('.logo-img')
cup.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(e.target.classList);
    if(e.target.classList.contains('thumb-1')){
        circle.style.background= "#017143";
        bigCup.src="images/img1.png";
        span.style.color="#017143"
        button.style.backgroundColor="#017143"; 
        logo.style.filter="";
        
    }
    else if(e.target.classList.contains('thumb-2')){
        circle.style.background= "#eb7495";
        
        bigCup.src="images/img2.png";
        span.style.color="#eb7495"
        button.style.backgroundColor="#eb7495"; 
        logo.style.filter="hue-rotate(190deg) saturate(120%) brightness(120%)";
    }
    else if(e.target.classList.contains('thumb-3')){
        circle.style.background= "#d752b1";
     
        bigCup.src="images/img3.png";
        span.style.color="#d752b1"
        button.style.backgroundColor="#d752b1"; 
        logo.style.filter="hue-rotate(160deg) saturate(120%) brightness(117%)";
    }
})