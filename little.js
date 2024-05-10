const mainButton = document.querySelector("button");
// console.log(mainButton.textContent);
const body = document.body;
const span = document.querySelector("span");
// console.log(span.textContent);

function randomGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red} ,${green} ,${blue})`;
  return randomColor;
}

mainButton.addEventListener("click", () => {
  //   body.style.backgroundColor = "brown";
  const randomColor = randomGenerator();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
});
