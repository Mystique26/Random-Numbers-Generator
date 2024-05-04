const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");
const label5 = document.getElementById("label5");
const label6 = document.getElementById("label6");

const min = 1;
const max = 48;
let randomNum1;
let randomNum2;
let randomNum3;


myButton.onclick = function(){
   randomNum1 = Math.floor(Math.random() * max ) + min;
   randomNum2 = Math.floor(Math.random() * max ) + min;
   randomNum3 = Math.floor(Math.random() * max ) + min;
   randomNum4 = Math.floor(Math.random() * max ) + min;
   randomNum5 = Math.floor(Math.random() * max ) + min;
   randomNum6 = Math.floor(Math.random() * max ) + min;

   label1.textContent = randomNum1;
   label2.textContent = randomNum2;
   label3.textContent = randomNum3;
   label4.textContent = randomNum4;
   label5.textContent = randomNum5;
   label6.textContent = randomNum6;


}