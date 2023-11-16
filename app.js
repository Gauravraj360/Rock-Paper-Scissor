function playRound(playerSelection, computerSelection,scores) {
    // your code here!
    console.log(playerSelection);
    console.log(computerSelection);

    if(computerSelection==='rock'){
        if(playerSelection==='paper'){
            scores.player++;
            return  "You win! "+playerSelection+ " Beats " + computerSelection;
        }
        else if( playerSelection==='scissor'){
            scores.computer++;
            return "You lose! "+computerSelection+ " beats "+playerSelection;
        }
        else{
            return "Draw!";
        }
    }
    else if(computerSelection==='scissor' ){
        if(playerSelection==='rock'){
            scores.player++;
            return "You win! "+playerSelection+ " Beats " + computerSelection;
        }
        else if( playerSelection==='paper'){
            scores.computer++;
            return "You lose! "+computerSelection+ " beats "+playerSelection;
        }
        else{
            return "Draw";
        }
    }
    else if(computerSelection==='paper' ){
        if(playerSelection==='scissor'){
            scores.player++;
            return "You win! "+playerSelection+ " Beats " + computerSelection;
        }
        else if( playerSelection==='rock'){
            scores.computer++;
            return "You lose! "+computerSelection+ " beats "+playerSelection;
        }
        else{
            return "Draw!";
        }
    }
  }
   function getComputerChoice(){
        const computerChoice= Math.floor((Math.random()*3)+1);
        if(computerChoice===1) return 'rock';
        else if(computerChoice===2) return 'paper';
        else return 'scissor';
   }

   const buttons= document.querySelectorAll('button');
   const choices = document.querySelectorAll('.choice');
   const gameStatus=document.querySelector('.game-status');
    const computerChoice=document.querySelector('.computer-selection');
    const playerChoice=document.querySelector('.player-selection');
    const scoreBox=document.querySelector('.score-box');
    
   //making a object for storing scores
   const scores ={
    player:0,
    computer:0
   };


   function showImage(playerSelection,computerSelection){
    // path to image file
    const imagePath1='./images/hand-'+playerSelection+'.png';
    const imagePath2='./images/hand-'+computerSelection+'.png';
    // Create an img element
    const imageElement1 = document.createElement('img');
    const imageElement2 = document.createElement('img');

    // make width smaller than original
    imageElement1.setAttribute('width','60%');
    imageElement2.setAttribute('width','60%');
    // Set the src attribute to the image path
    imageElement1.src = imagePath1;
    imageElement2.src = imagePath2;

    // Get the container element where you want to display the image
    const imageContainer1 = document.querySelector('.player-selection');
    const imageContainer2 = document.querySelector('.computer-selection');

    // Append the image element to the container
    imageContainer1.appendChild(imageElement1);
    imageContainer2.appendChild(imageElement2);
    
}

    function handlePlayerSelection(playerSelection){
        
        const computerSelection = getComputerChoice();
        const result=playRound(playerSelection,computerSelection,scores);
        console.log(result);
        
        scoreBox.textContent = `You: ${scores.player} - Computer: ${scores.computer}`;
        computerChoice.innerHTML='<h3> '+computerSelection+' </h3>'
        playerChoice.innerHTML='<h3> '+ playerSelection +' </h3>'
        gameStatus.textContent=result;
        
        // Check for a winner
        if (scores.player === 5) {
            gameStatus.textContent = "Congratulations! You are the winner!";
            resetGame();
        } else if (scores.computer === 5) {
            gameStatus.textContent = "Sorry, you lost. Better luck next time!";
            resetGame();
        }

        showImage(playerSelection,computerSelection);
        
    }

   choices.forEach((choice) => {
    choice.addEventListener('click', function () {
        const playerSelection = this.id;
        handlePlayerSelection(playerSelection);
    });
});

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        const playerSelection = this.innerHTML.toLowerCase();
        handlePlayerSelection(playerSelection);
    });
});

   function resetGame() {
    scores.player = 0;
    scores.computer = 0;
    scoreBox.textContent = "Player: 0 - Computer: 0";
}

  