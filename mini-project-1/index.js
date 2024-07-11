const images = [
  {
    url: "./images/ball.png",
    name: "ball"
  },
  {
    url: "./images/boat.png",
    name: "boat"
  },
  {
    url: "./images/hat.png",
    name: "hat"
  },
  {
    url: "./images/kite.png",
    name: "kite"
  },
  {
    url: "./images/poop.png",
    name: "poop"
  },
  {
    url: "./images/popsicle.png",
    name: "popsicle"
  },
  {
    url: "./images/sad.png",
    name: "sad"
  },
  {
    url: "./images/sea.png",
    name: "sea"
  },
  {
    url: "./images/short.png",
    name: "short"
  },
  {
    url: "./images/smile.png",
    name: "smile"
  },
  {
    url: "./images/smily.png",
    name: "smily"
  },
  {
    url: "./images/star.png",
    name: "star"
  },
];
const counter = 0;
const score = 0;
const highScore = 0;
document.body.classList.add('background-body');
let btnPlayAgain = document.querySelector('.play-again');

const selectRandomImage = () => {
  document.querySelector('.count-question').textContent = `Question number ${counter}`;

  const imageToGuessIndex = Math.floor(Math.random() * images.length);
  const { url } = images[imageToGuessIndex];
  document.getElementById("img-to-guess").src = url;

  return imageToGuessIndex;
}
const i = selectRandomImage();
