let hitCount = 0;
let isGameStarted=false;

function startGame(){
document.getElementById('gameStatus').innerText="Game started";
document.getElementById('gameStatus').style.color = "green";
hitCount = 0;
isGameStarted = true;    
let mosquito = document.getElementById('mosquito');

let time = setInterval(() => {
    let i = Math.floor(Math.random()*600)+1;
    let j = Math.floor(Math.random()*600)+1;
    mosquito.style.left=i+"px";
    mosquito.style.top=j+"px";
}, 900);

setTimeout(()=>{
    clearTimeout(time);
    isGameStarted = false;
    let gameOver = document.getElementById('gameStatus');
    gameOver.innerText="Game Over";
    gameOver.style.color="red";
    
},30000);
}

function hitMosquito(){
    if(isGameStarted){
    hitCount++;
    document.getElementById('totalHit').innerText=hitCount;
    }
}