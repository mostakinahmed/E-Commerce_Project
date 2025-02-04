function loadSlider() {
  const url = "http://localhost:5000/api/sliders";
  fetch(url)
    .then((response) => response.json())
    .then((image) => {
      let index = 0;
      let time = 3000;

      function changeImage() {
        const container = document.getElementById("slider-container");
        const htmlCode = `<img src="${image[index].img}"/>`;
        container.innerHTML = htmlCode;
        if (index < image.length - 1) {
          index++;
        } else {
          index = 0;
        }
      }

      setInterval(changeImage, time);
    });
}
loadSlider();

//declare all image under an array

//set time for image change
