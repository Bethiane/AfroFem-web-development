const rElement = document.getElementById("r");
console.log(rElement);

const gElement = document.getElementById("g");
console.log(gElement);

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
        console.log(rgbString);

        const square = squares[i];
        square.style.backgroundColor = rgbString;
      
    }
 

})