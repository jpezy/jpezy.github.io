$(document).ready(function () {
  // Your code goes here
$("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "rgb(193, 198, 200)")
  .css("position", "absolute")
  .css("top", 50)
  .css("left", 50)
  .appendTo("#die")

function makeDot () {
$("<div>")
  .css("top")
  .css("left")
  .appendTo("elementID")

}

makeDot(50, 50, "#die"); // middle middle
makeDot(25, 25, "#die"); // top left
makeDot(75, 75, "#die"); // bottom right

function rollDie(dieId) {
var randomNum = Math.ceil(Math.random() * 6);
console.log(randomNum);
}

function handleClick() {
  rollDie("#die")
}
$("#die").on("click", handleClick);



});
