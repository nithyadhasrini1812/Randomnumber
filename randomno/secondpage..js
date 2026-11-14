var input =document.getElementById("data");
var random=Math.round(Math.random()*100);
console.log(random);
var score=document.getElementById("liv");
var msg=document.getElementById("message");
var tot=10;
function check(){
    var guessno=input.value
    if(guessno==random){
        window.location.href="./thirdpg.html"
    
    }
    else if(guessno>random){
        msg.innerHTML="your guess is high 🫨"
        tot--;
        score.textContent="Lives: "+tot;
        
    }
    else{
        msg.innerHTML="your guess is low😂"
        tot=tot-1   
        score.textContent="Lives: "+tot
    }
    if(tot==0){
        window.location.href="./fourpg.html"
    }

}
function playagain(){
    window.location.href="./fistpage.html"
}
function again(){
    window.location.href="./secondpg.html"
}


