const rElement = document.getElementById("r");
const gElement = document.getElementById("g");


const levels = Array.from(document.getElementsByClassName("mode"));

const squares =Array.from(document.getElementsByClassName("square"));


let gameLevel = levels.find((level)=>{
    const classList = Array.from(level.classList);
    return classList.includes("selected");

}).innerHTML;

levels.forEach((level)=>{
    level.addEventListener("click", function () {
      levels.forEach((mode)=> mode.classList.remove("selected"));
        this.classList.add("selected");

        gameLevel = this.innerHTML;
    });
});

const startButton = document.getElementById("reset");

startButton.addEventListener("click", function () {
    for (let i = 0; i < squares.length; i = i + 1) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        const rgbString = "rgb("+ red + "," + green + "," + blue + ")";
      

        const square = squares[i];

        square.dataset.rgb_value= JSON.stringify [red, green, blue]
        square.style.backgroundColor = rgbString;
      
    }
 

    const  randomSquareIndex = Math.floor(Math.random() *6);
    const headerColorSquare = squares[randomSquareIndex];
    setHeaderRgbBackgroundColor(headerColorSquare)
  

});


function setHeaderRgbBackgroundColor(squareElement) {
    const rgbString = squareElement.dataset.rgb_value;
    const [red, green, blue] = JSON.parse(rgbString);
    console.table(red, green, blue);
    
    // const redBackground = [red, 0, 0];
    // const greenBackgound = [0, green, 0];
    // const blueBackground = [0, 0, blue];

}