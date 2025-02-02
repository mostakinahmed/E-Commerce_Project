const image = [
  "../img/cover-1.jpg",
  "../img/cover-2.jpg",
  "../img/cover-3.jpg",
  "../img/cover-4.jpg",
];
let index = 0;
let time = 3000;

function changeImage() {
  const container = document.getElementById("slider-container");
  const htmlCode = `<img src="${image[index]}"/>`;
  container.innerHTML = htmlCode;
  if (index < image.length - 1) {
    index++;
  } else {
    index = 0;
  }
}

setInterval(changeImage, time);
