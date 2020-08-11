const text = document.getElementById("text");
const btnText = document.getElementById("btn-text");
const btnColor = document.getElementById("btn-color");

// btnText.addEventListener("click", changeText());
// btnColor.addEventListener("click", changeColor());

const getRandomValue = () => {
  return Math.floor(Math.random() * 6) + 1;
};

btnText.onclick = function () {
  let randomText = getRandomValue();

  switch (randomText) {
    case 1:
      text.innerHTML = "I Like Pie";
      break;
    case 2:
      text.innerHTML = "Xbox, Playstation, Who Cares Enjoy It";
      break;
    case 3:
      text.innerHTML = "Array Pop only has a Big O(1)";
      break;
    case 4:
      text.innerHTML = "Cats make the world a better place";
      break;
    case 5:
      text.innerHTML = "Dexter, fantasic show....horrible ending";
      break;
    case 6:
      text.innerHTML = "Han shot first";
      break;
  }
};

btnColor.onclick = function () {
  let randomColor = getRandomValue();

  switch (randomColor) {
    case 1:
      text.style.color = "blue";
      break;
    case 2:
      text.style.color = "purple";
      break;
    case 3:
      text.style.color = "green";
      break;
    case 4:
      text.style.color = "black";
      break;
    case 5:
      text.style.color = "orange";
      break;
    case 6:
      text.style.color = "yellow";
      break;
  }
};
