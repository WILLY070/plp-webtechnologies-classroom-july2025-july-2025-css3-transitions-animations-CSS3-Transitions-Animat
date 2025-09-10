/* ----------- Part 2: Functions ----------- */

// Example of global variable
let globalMessage = "Calculated Value:";

// Function with parameter + return value
function square(num) {
  return num * num;
}

// Function with multiple parameters
function sum(a, b) {
  return a + b;
}

// Function demonstrating local vs global scope
function showSquare(n) {
  let localResult = square(n); // local variable
  document.getElementById("calc-result").innerText =
    globalMessage + " Square of " + n + " = " + localResult;
}

function showSum(a, b) {
  let localResult = sum(a, b);
  document.getElementById("calc-result").innerText =
    globalMessage + " Sum = " + localResult;
}

/* ----------- Part 3: Combining CSS Animations with JS ----------- */

const animateBtn = document.getElementById("animateBtn");
const triggerBox = document.getElementById("triggerBox");

// Function to toggle animation using classList
function toggleBoxAnimation() {
  triggerBox.classList.toggle("animate");
}

// Event listener triggers animation
animateBtn.addEventListener("click", toggleBoxAnimation);
