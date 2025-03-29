let userScore=0;
let compScore=0;
 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const userScorePara=document.querySelector("#user-score");
 const compScorePara=document.querySelector("#comp-score");
 const genCompChoice=()=>{
      const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
 }
 const drawGame=()=>{
  
    msg.innerText="Game was Draw.Play Again";
    msg.style.backgroundColor="#081b31";
 }
 const showWinner=(userWin,userChoice,compChoice)=>{
   if(userWin){
    userScore++;//updation in score
    userScorePara.innerText=userScore;//to show the updated score
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
   }else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You Lose! ${compChoice} beat your ${userChoice}`;
    msg.style.backgroundColor="red";
   }
 }
 const playGame=(userChoice)=>{
  
   const compChoice=genCompChoice();
   if(userChoice===compChoice){
    //Draw Game
    drawGame();
   }
   else{
    userWin=true;
    if(userChoice==="rock"){
        //scissors,paper
        userWin=compChoice==="paper"?false:true;
        
    }
    else if(userChoice==="paper"){
        //rock,scissors
      userWin=compChoice==="scissors"?false:true;
    }else{
        //rock,paper
       userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
   
 }
 choices.forEach((choice)=>{//to access each choice
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");//returns id of each choice
        playGame(userChoice);
    })
 })