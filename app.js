let started= false ;
let level =0;
let gameseq=[];
let userseq=[];
let highscore =0;
let btns = ["red","green","yellow","purple"]
let h2 = document.querySelector("h2");

document.addEventListener("keydown",function(){
    if(started == false ){
        console.log ("game has started")
        started = true;
        levelup();
    }
    
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText=`level ${level}`;
    let rndmIdx= Math.floor(Math.random()*4);
    let rndmbtn = btns[rndmIdx];
   
    let btn = document.querySelector(`.${rndmbtn}`);
     gameseq.push(rndmbtn);
     console.log(gameseq);


    btnflash(btn);
}

function checkbtn (idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length===gameseq.length){
            setTimeout(levelup,1000);
            
        }
    }
    else{
        if(highscore<level){
            highscore = level;
            h2.innerHTML = `Game over! 🏆 NEW HIGH SCORE: <b>${level}</b>! <br> Press any key to start`;
        }
        else{
            h2.innerHTML= `Game over! your score was <b>${level}</b> <br> press any key to start`;
        }

        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        },125);
      resetGame();
    }
}
function btnpress(){
    let btn = this;
    btnflash(btn);
    let usercolor = this.getAttribute("id");
    userseq.push(usercolor);
    checkbtn(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
    
}


function resetGame() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}