const game = ()=>{
    let playerScore = 0;
    let computerScore =0;
    let moves =0

    //Funtion
    const playGame =()=>{
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const palyerOption = [rockBtn, paperBtn, scissorBtn];
        const computerOption = ['rock', 'paper', 'scissor']

        palyerOption.forEach(option =>{
            option.addEventListener('click', function(){
                const movesLeft = document.querySelector('.movesleft');
                moves++
                movesLeft.innerText = `Moves Left: ${10 - moves}`;

                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOption[choiceNumber];

                winner(this.innerText, computerChoice)

                if(moves == 10){
                    gameOver(palyerOption,movesLeft);
                }
            })
        })
    }

    const winner = (player,computer)=>{
        const result =document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'computer win';
                computerScore++
                computerScoreBoard.textContent = computerScore;
            }
            else{
                result.textContent = 'player win';
                playerScore++
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissor'){
                result.textContent = 'computer win';
                computerScore++
                computerScoreBoard.textContent = computerScore;
            }
            else{
                result.textContent = 'player win';
                playerScore++
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissor'){
            if(computer == 'rock'){
                result.textContent = 'computer win';
                computerScore++
                computerScoreBoard.textContent = computerScore;
            }
            else{
                result.textContent = 'player win';
                playerScore++
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    const gameOver = (palyerOption, movesLeft) =>{
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
        
        palyerOption.forEach(option=>{
            option.style.display = 'none';
        })

        chooseMove.innerText = 'Game over!!!';
        movesLeft.style.display = 'none';

        if(playerScore > computerScore){
            result.style.fontSize = '2rem'
            result.innerText = 'You Won The Game'
            result.style.color = 'rgb(41, 164, 70)'
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem'
            result.innerText = 'You Lost The Game'
            result.style.color = 'red'
        }
        else{
            result.style.fontSize = '2rem'
            result.innerText = 'Tie'
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.visibility = 'visible';
        reloadBtn.addEventListener('click', () =>{
            window.location.reload();
        })
    }
    playGame();
}

game();