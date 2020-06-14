const DOCUMENT_BODY = document.body;
const WALL_PAPER_ARRAY = [
  "wallpaper1.jpg",
  "wallpaper2.jpg",
  "wallpaper3.jpg",
  "wallpaper4.jpg",
  "wallpaper5.jpg",
  "wallpaper6.jpg",
  "wallpaper7.jpg",
  "wallpaper8.jpg",
  "wallpaper9.jpg",
  "wallpaper10.jpg",
];
const IMAGE_COUNT = 5;

getRandomNumber = () => {
  return Math.floor(Math.random() * IMAGE_COUNT);
};

changeBackground = (choiceImageIndex = 0) => {
  DOCUMENT_BODY.style.backgroundImage = `url("wallpaper/${WALL_PAPER_ARRAY[choiceImageIndex]}")`;
};

initialize = () => {
  const choiceImageIndex = getRandomNumber();
  changeBackground(choiceImageIndex);
};

initialize();
