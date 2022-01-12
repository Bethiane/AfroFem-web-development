const rElement = document.getElementById("r");
console.log(rElement);

const gElement = document.getElementById("g");
console.log(gElement);

const levels = Array.from(document.getElementsByClassName("mode"));

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