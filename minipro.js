let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purpul","green"];

let started = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
   if(started == false){
    console.log("game is started");
    started= true;

    levelUp();
   }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);
}

function levelUp (){
    
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx){
  

    if(userSeq[idx]==gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
          setTimeout(levelUp,1000);
       }
    }else{
        h2.innerHTML=`Game Over ! Your Score was <b> ${level}</b> <br>Press any Key to start the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);
        reset();
        console.log("game over!!!");
    }

}



function btnPress (){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
   for(btn of allBtns){
   btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq =[];
    userSeq =[];
    level = 0;
}