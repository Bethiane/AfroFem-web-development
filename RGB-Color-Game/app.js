const rElement = document.getElementById("r");
const gElement = document.getElementById("g");
const bElement = document.getElementById("b");
const colorDisplayElement = document.getElementById("color-display")

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
    this.innerHTML = " New Colors";
    for (let i = 0; i < squares.length; i = i + 1) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        const rgbString = "rgb("+ red + "," + green + "," + blue + ")";
      

        const square = squares[i];

        square.dataset.rgb_value= JSON.stringify([red, green, blue])
        square.style.backgroundColor = rgbString;
      }


    const  randomSquareIndex = Math.floor(Math.random() * 6);
    const headerColorSquare = squares[randomSquareIndex];
    setHeaderRgbBackgroundColor(headerColorSquare)
  

});


function setHeaderRgbBackgroundColor(squareElement) {
    const setHeaderElementBackgroundColor = (rgbValues, element) => {
        const [r, g, b] = rgbValues;
        const rgbString = `rgb(${r}, ${g}, ${b})`; 
        element.style.backgroundColor = rgbString;
        element.innerHTML = rgbValues.find(rgbValue =>{
            return rgbValue > 0;
        });
    };
    const rgbString = squareElement.dataset.rgb_value;
    colorDisplayElement.dataset.rgb_value =  rgbString;
    const [red, green, blue] = JSON.parse(rgbString);
    // console.log(rgbString);
    
    
    const redBackground = [red, 0, 0];
    const greenBackgound = [0, green, 0];
    const blueBackground = [0, 0, blue];
   

    setHeaderElementBackgroundColor(redBackground,rElement);
    setHeaderElementBackgroundColor(greenBackgound,gElement);
    setHeaderElementBackgroundColor(blueBackground,bElement); 
   
}

//add an event listener 

squares.forEach(square =>{
    square.addEventListener("click", function(){
      const headerRgbValue = colorDisplayElement.dataset.rgb_value
      const squareRgbValue = this.dataset.rgb_value;

      if(headerRgbValue == squareRgbValue){
         setSquareBackgoundAfterWin(headerRgbValue)
      }else{
          this.classList.add("hidden")
      }
    });

});

function setSquareBackgoundAfterWin(headerRgbString){
    const [r, g, b] = JSON.parse(headerRgbString);
    const rgbString = `rgb(${r}, ${g}, ${b})`; 

    squares.forEach(sq =>{
        sq.classList.remove("hidden");
        sq.style.backgroundColor = rgbString;
    })
}

