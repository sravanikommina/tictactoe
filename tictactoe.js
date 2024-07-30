let heading=document.getElementById("heading");
let restartBtn=document.getElementById("restartBtn");
let boxes=Array.from(document.getElementsByClassName("box"));
let winningPlayer=document.getElementById("winning-Player");
let playerTurn=document.getElementById("player-Turn");


let winnderIndicator=getComputedStyle(document.body).getPropertyValue('--winning-blocks')


let O_TEXT="O";
let X_TEXT = "X";
let currentPlayer=X_TEXT;
playerTurn.innerText=`Next Player is : ${currentPlayer}`;
let spaces=Array(9).fill(null);

const startGame=()=>{
    
    boxes.forEach(box=>box.addEventListener('click',boxClicked));
    }

function boxClicked(event){
    
    const id =event.target.id
    
    if(!spaces[id]){
        spaces[id]=currentPlayer;
        event.target.innerText=currentPlayer;
        

        if(playerHasWon() !==false){
            playerTurn.innerText= "Game Over!!!";
            if(currentPlayer== X_TEXT){
                winningPlayer.innerText= "X has won"
            }else if(currentPlayer== O_TEXT){
                winningPlayer.innerHTML="O has won";
            }
            
            let winning_blocks=playerHasWon();
            console.log(winning_blocks);
            boxes.forEach(box=>box.removeEventListener('click',boxClicked));

            
            
            
    
        }
        else{
            currentPlayer=currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
        playerTurn.innerText=`Next Player is : ${currentPlayer}`;
        }
        
    }
}


    const combos=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    function playerHasWon(){    
        for(const condition of combos){
            let [a,b,c]=condition

            if(spaces[a] && (spaces[a] == spaces[b] && spaces[b]==spaces[c])){
                return [a,b,c]
            }
            
        }
        return false

}

    
    restartBtn.addEventListener('click',restart);

    function restart(){
        spaces.fill(null);
        boxes.forEach(box=>{box.innerText=''});
        
        winningPlayer.innerText= ' '

        currentPlayer=X_TEXT;
        playerTurn.innerText=`Next Player is ${currentPlayer}`;
        startGame();
    }


startGame()