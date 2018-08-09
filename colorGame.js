var numSquares= 6;
var colors = [];                   //Generate the random colors
var pickedColor; 
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector(".messageDisplay");
var displayColor = document.getElementById("displayColor");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var selected = document.querySelector(".selected");
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");
var modeButton = document.querySelectorAll(".modeButton");

init();

function init(){
 //Mode buttons event listeners
 setUpModeButtons();
 //Mode squares event listeners
 setUpSquaresMode();
 //
 reset();
}

function setUpModeButtons() {
    //Looping through the "easy" and hard buttons, to get which is clicked
    for (var i = 0; i < modeButton.length; i++) {
        //This listens to whichever button is clicked and add/remove the background color
        modeButton[i].addEventListener("click", function () {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            //Ternary Operator of If statement to check which button is clicked and allocate the number of squares
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquaresMode() {
    //Loop through the squares 
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedcolor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                addColorToAllSquareBackgrd(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                messageDisplay.textContent = "Try again!";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}


//This helper function helps to reset and allocate colors
function reset() {
    //Generate random color
    colors = generateRandomColor(numSquares);
    //Pick Random color as the correct color from array
    pickedColor = randomPickedColor();
    //Change displayColor to match the random picked color
    displayColor.textContent = pickedColor;
    //The messageDisplay should not show any message after reset button is clicked
    messageDisplay.textContent = "";
    //Add the colors to the squares background
    for (var i = 0; i < squares.length; i++) {
        //if all the colors are generated in the array , 
        if (colors[i]) {
            //Allow all colors to the squares background if the colors generated is 6
            squares[i].style.display = "block";
            //Add the colors to the squares background
            squares[i].style.backgroundColor = colors[i];
        } else {
            //Undisplay the remaining 3 squares if colors generated is 3
            squares[i].style.display = "none";
        }
    }
    //Add the 'steelblue' color to the h1
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
}


//This listens to the clicks of the reset/new game button
resetButton.addEventListener("click", function(){
    reset();
});


//Function to add the correct clicked color to all other squares background
function addColorToAllSquareBackgrd(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

//Function randomly pick the correct color "pickedColor"
function randomPickedColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Function to generate random RGB colors and push them into an array"arr" and loop through 
//the number of times the colors will be generated
function generateRandomColor(num) {
    //make an array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

//Helper Function to generate the RGB colors
function randomColor() {
    //generate red color
    var r = Math.floor(Math.random() * 256);
    //generate red color
    var g = Math.floor(Math.random() * 256)
    //generate red color
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}