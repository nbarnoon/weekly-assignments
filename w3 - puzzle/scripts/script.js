let shuffleButton = document.getElementById("shuffleButton")
let resetButton = document.getElementById("resetButton")
let statusText = document.getElementById("status")
let puzzleStage = document.getElementById("puzzleStage")


// create an array with the correct order 
let correctOrder = [1,2,3,4,5,6,7,8,9]

//variable for our current order
let currentOrder = correctOrder.slice()

//remembers whick slot index the user clicked first  
let firstPick = null;


//functions
let renderPuzzle = function() 
{
    for (let i = 0; i < currentOrder.length; i++) {
        //find the related img by id=piece, i = 0, piece 1+0 = piece1
        const id = "piece" + (i +1)
        const piece = document.getElementById(id)
        piece.src = "images/img" + currentOrder[i] + ".jpg"
        //attach a click handler that tells which slot was clicked 
        piece.onclick = function() {
            handlePieceClick(i)
        }
    }

}

let handlePieceClick = function(index) {
    //store slot index in firstpick 
    if (firstPick == null) {
        firstPick = index
        
    }

    else if (firstPick == index) {
        
        firstPick = null
    }
    else {
        let temp = currentOrder[firstPick]
        currentOrder[firstPick] = currentOrder[index]
        currentOrder[index] = temp

        renderPuzzle() 
        
        firstPick = null

    
    }
}

/*let checkSolved = function() {
    for (let i = 0; i < correctOrder.length; i++) {
        if (currentOrder[i] !== correctOrder[i]) {
           return
        }
    }
    statusText.textContent = "Puzzle Completed! Well done!"
    puzzleStage.style.opacity = "0.8"
    puzzleStage.style.pointerEvents = "none"
    
}*/


//shuffle funct
let shufflePieces = function() 
{
    for (let i = currentOrder.length - 1; i>0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = currentOrder[i]
        currentOrder[i] = currentOrder[j]
        currentOrder[j] = temp

    }

    renderPuzzle()
    
}

let resetPuzzle = function() {
    currentOrder = correctOrder.slice()
    renderPuzzle()
}

shuffleButton.addEventListener("click", shufflePieces)
resetButton.addEventListener("click", resetPuzzle)

renderPuzzle()