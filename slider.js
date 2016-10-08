window.onload = function () {
  console.log("window load");

  (function () {
    var btnDown = document.getElementById("sliderBtnDown");
    var btnUp = document.getElementById("sliderBtnUp");
    var imgTop = document.getElementById("imgTop");
    var imagesPatch = 'img/';
    var images = ['work-1.png','work-2.png','work-3.png','work-4.png'];

    var img = btnDown.getElementsByTagName('img');
    var imgName = img[0].src.split(imagesPatch)[1];

    var imgUp = img[0].cloneNode(true);
    var imgDown = img[0].cloneNode(true);

    initSlider();

    function initSlider() {
      btnDown.addEventListener("click", DownImg);
      btnUp.addEventListener("click", UpImg);
      // добавляем классы
      imgUp.classList.add("slider__button-img", "slider__button-img--up");
      imgUp.setAttribute('src', imagesPatch + images[0]);
      imgDown.classList.add("slider__button-img", "slider__button-img--down");
      imgDown.setAttribute('src', imagesPatch + images[2]);

      console.log(img);

      // Определяем номер элемента в масиве
      console.log(find(images, imgName));

      // вставим её после текущей картинки
      img[0].parentNode.insertBefore(imgUp, btnDown.firstChild);
      // вставим её перед текущей картинки
      img[0].parentNode.insertBefore(imgDown, btnDown.lastChild);


      console.log(btnDown);
      console.log(btnDown.getElementsByTagName('img'));
    }

    function DownImg() {

      img[0].style.top = '5%';
      img[1].style.top = '100%';
      console.log(img[1]);

    }

    function UpImg() {
      console.log('Up');
    }


    // Ищем элемент в массиве
    function find(array, value) {

      for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return i;
      }

      return -1;
    }

  })();
};