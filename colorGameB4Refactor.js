var numSquares= 6;
var colors = generateRandomColor(numSquares); //Generate the random colors 
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector(".messageDisplay");
var pickedColor = randomPickedColor();
var displayColor = document.getElementById("displayColor");
displayColor.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var selected = document.querySelector(".selected");
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");

//This listens to the clicks of the easy button
easyButton.addEventListener("click", function(){
    //Add selected background color to the easy button and remove the color from hard button
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    //Keeps track of the number of squares 
    numSquares = 3;
    //When easy Btn is clicked, generate 3 random colors 
    colors = generateRandomColor(numSquares);
    //Pick random color as the correct color from the generated colors
    pickedColor = randomPickedColor();
    //Change displaycolors to match the random picked color
    displayColor.textContent = pickedColor;
    //Add the colors to the squares background
    for(var i = 0; i < squares.length; i++){
        //if the colors generated in the array is 3, 
        if(colors[i]){
            //add the colors to the squares background
            squares[i].style.backgroundColor = colors[i];
        }else {
            //Undisplay the remaining 3 squares
            squares[i].style.display = "none";
        }
    }
});
//This listens to the clicks of the hard button
hardButton.addEventListener("click", function(){
    //Add selected background color to the hard button and remove the color from easy button
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    //Keeps track of the number of squares
    numSquares = 6;
    //When hard Btn is clicked, generate 3 random colors 
    colors = generateRandomColor(numSquares);
    //Pick random color as the correct color from the generated colors
    pickedColor = randomPickedColor();
    //Change displaycolors to match the random picked color
    displayColor.textContent = pickedColor;
    //Add the colors to the squares background
    for(var i = 0; i < squares.length; i++){
        //add the colors to the squares background
        squares[i].style.backgroundColor = colors[i];
        //Undisplay the remaining 3 squares
        squares[i].style.display = "block";
    }
});


//This listens to the clicks of the reset/bew game button
resetButton.addEventListener("click", function(){
    //Generate random color
    colors = generateRandomColor(numSquares);
    //Pick Random color as the correct color from array
    pickedColor = randomPickedColor();
    //Change displayColor to match the random picked color
    displayColor.textContent = pickedColor;
    //The messageDisplay should not show any message after reset button is clicked
    messageDisplay.textContent = "";
    //Add the colors to the squares background
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
});

//Loop through the squares 
for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedcolor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Well done!"
            addColorToAllSquareBackgrd(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";    
        }else{
            messageDisplay.textContent = "Try again!";
            this.style.backgroundColor = "#232323";
        }
    });
}

//Function to add the correct clicked color to all other squares background
function addColorToAllSquareBackgrd(color){
    for(var i = 0; i < squares.length; i++){
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
function generateRandomColor(num){
    //make an array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++){
     arr.push(randomColor());
    }
    //return the array
    return arr;
}

//Helper Function to generate the RGB colors
function randomColor(){
    //generate red color
   var r = Math.floor(Math.random()* 256);
   //generate red color
   var g = Math.floor(Math.random()* 256)
   //generate red color
   var b = Math.floor(Math.random()* 256)
   return "rgb(" + r + ", " + g + ", " + b + ")";
}