const yourChoice = document.getElementById('myChoice');
const computerChoice = document.getElementById('computerChoice');
const result = document.getElementById('result');
const yourScore = document.getElementById('myScore');
const compScore = document.getElementById('computerScore');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');



const choices = ['scissors','rock', 'paper'];
let myscore = 0;
let computscore =0;


//default screen
result.textContent = '';
yourScore.textContent = `Your score: ${myscore}`;
compScore.textContent = `Computer score: ${computscore}`;
yourChoice.textContent = ''
computerChoice.textContent = ''



function game(myChoice){
yourChoice.textContent = `Your choice: ${myChoice}`;
const compChoice = choices[Math.floor(Math.random() * 3)]
console.log(compChoice);
computerChoice.textContent = `Computer choice: ${compChoice}`;
hands.classList.toggle('hidden')

if(myChoice === compChoice){
    result.textContent = `It's  a TIE!`;
    result.classList.add('yellow');
    result.classList.remove('green','red');
}else if(myChoice == 'rock' && compChoice == 'scissors' ||
    myChoice == 'scissors' && compChoice == 'paper' ||
    myChoice == 'paper' && 
    compChoice == 'rock'){
    myscore++
result.textContent = `You WON!`;
yourScore.textContent = `Your score: ${myscore}`;
result.classList.remove('red','yellow');
result.classList.add('green')
    }else{
        result.textContent = `You LOST!`;
    
        computscore++;
        compScore.textContent = `Compute score: ${computscore}`;
        result.classList.remove('green','yellow')
        result.classList.add('red')
    }

    //remove  not-chosen hand
if(myChoice == 'rock' && compChoice == 'rock'){  scissors.classList.toggle('hide');
    paper.classList.toggle('hide')    
}else if(myChoice == 'paper' && compChoice == 'paper'){scissors.classList.toggle('hide');
    rock.classList.toggle('hide');
}else if(myChoice == 'scissors' && compChoice == 'scissors'){paper.classList.toggle('hide') ;
    rock.classList.toggle('hide');   
}else if('rock' !== myChoice && 'rock' !== compChoice){
rock.classList.toggle('hide');
}else if('scissors' !== myChoice && 'scissors' !== compChoice){
    scissors.classList.toggle('hide')
}else if('paper' !== myChoice && 'paper' !== compChoice){paper.classList.toggle('hide')}

setTimeout(repeatGame,1500)
}

function repeatGame(){
rock.classList.remove('hide')

   paper.classList.remove('hide');
   scissors.classList.remove('hide');
  
}


