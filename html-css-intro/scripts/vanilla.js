// const a = 10;
// const b = 20;

// const sum = a+b;
// console.log(sum);

// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello Anne!';

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  
 }
myButton.onclick = function() {
  setUserName();
}


// let myImage = document.querySelector('img');
// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     console.log(mySrc);
//     if(mySrc == '../images/firefox-icon.png') {
//       myImage.setAttribute('src','../images/logo.png');
//     } else {
//       myImage.setAttribute('src','../images/firefox-icon.png');
//     }

// }
