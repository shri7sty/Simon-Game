let gameseq=[];
let userseq=[];

let started=false;
let level=0;
let btns=["red","yellow","green","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
if(started == false){
   console.log("game started!");
   started=true;
   levelup();
}
 });

function levelup(){
   userseq=[];
   level=level+1;
   h2.innerText=`level ${level}`;
  let randidx=Math.floor(Math.random()*3);
    randcol=btns[randidx];
     randbtn=document.querySelector(`.${randcol}`);
   gameseq.push(randcol);
    bflash(randbtn);
 }
 function bflash(btn){
   btn.classList.add("bflashh");
   setTimeout(function(){
      btn.classList.remove("bflashh")
   },1000);
 }
 function uflash(btn){
   btn.classList.add("uflashh");
   setTimeout(function(){
      btn.classList.remove("uflashh")
   },1000);
 }
 function btnpress(){
  let btn= this;
  let col=btn.getAttribute("id");
  userseq.push(col);
  console.log(userseq);
  uflash(btn);
checkans(userseq.length-1);
}

 let Allbtns=document.querySelectorAll(".btn");
 for(i of Allbtns){
   i.addEventListener("click",btnpress);
 }
function checkans(idx){

if(userseq[idx] === gameseq[idx]) {
if(userseq.length == gameseq.length){
  setTimeout(levelup(),1000);
}
}
else{
   h2.innerText=`game over! your score was ${level} press any key to start`;
   document.querySelector("body").style.backgroundColor="red";
   setTimeout(function(){
      document.querySelector("body").style.background="white";
   },200);
   reset();
}
}
//____________________________________________________________________________________________________________
function reset(){
started=false;
level=0;
gameseq=[];
userseq=[];
}

