const boxs=document.querySelectorAll(".box");
const statusT=document.querySelector("#status");
const btnRestart=document.querySelector("#restart");



let X = "<img src='../images/x.webp' >";
let O = "<img src='../images/o.webp' >";


// console.log(document.querySelector(".box").dataset.index);


// Winning combinations
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let options=["","","","","","","","",""];
let player="Thiru";
let currentPlayer=X;
let running=false;

init();
function init(){
     boxs.forEach(box=>box.addEventListener("click",boxClicked));
     btnRestart.addEventListener("click",restartGame);
     statusT.textContent=`${player} Turn Now`;
     running=true;
}

function boxClicked(){
    const index=this.dataset.index;
    if(options[index]!=="" || !running){
        return;
    }
    ubdateBox(this,index);
    checkWinner();
}

function ubdateBox(box,index){
   options[index]=currentPlayer;
    box.innerHTML=currentPlayer;
}

function changePlayer(){
    player=(player==="thiru") ? "vimal" : "thiru";
    statusT.textContent=`${player} Turn Now..`;
    currentPlayer=(currentPlayer===X)? O : X;
}
function checkWinner(){
        let isWon=false;
   for(let i=0;i<win.length;i++){
        const condition=win[i]; // 0,1,2
        const box1=options[condition[0]];//x
        const box2=options[condition[1]];//''
        const box3=options[condition[2]];//''

        if(box1=="" || box2=="" || box3==""){
            continue;
        }

        if(box1==box2 && box2==box3 ){
            isWon=true;
        }
   }
    if(isWon){
        statusT.textContent=`${player} Won..`

    }else if(!options.includes("")){
          statusT.textContent=`Game Draw..!`;
          running=false;
    }else{
        changePlayer()
    }
}

function  restartGame(){
     options=["","","","","","","","",""];
     player="Thiru";
     currentPlayer=X;
     running=true
     ;
     statusT.textContent=`${player} Turn Now`;
     boxs.forEach(box=>box.innerHTML="");
}

