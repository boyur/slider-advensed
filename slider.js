window.onload = function () {
  console.log("window load");

  (function () {
    var btns = document.getElementById("btns");
    var btnDown = document.getElementById("sliderBtnDown");
    var btnUp = document.getElementById("sliderBtnUp");
    var imgTop = document.getElementById("imgTop");
    var imagesPatch = 'img/';
    var images = ['work-1.png', 'work-2.png', 'work-3.png', 'work-4.png'];
    var positionSlide;

    var imgTagTop = imgTop.getElementsByTagName('img');
    //var imgName = img[0].src.split(imagesPatch)[1];

    var imgDownNew = imgTagTop[0].cloneNode(true);
    var imgTagDown;

    initSlider();

    function initSlider() {
      imgDownNew.classList.add("slider__button-img", "slider__button-img--down");
      imgDownNew.setAttribute('src', imagesPatch + images[1]);

      console.log(imgTagTop);

      // вставим её перед текущей картинки
      imgTagTop[0].parentNode.insertBefore(imgDownNew, imgTop.lastChild);

      if (images.length > 2) {
        for (var i = 2; i < images.length; i++) {
          var imgDownPlus = imgTagTop[1].cloneNode(true);
          imgDownPlus.classList.add("slider__button-img--down");
          imgDownPlus.setAttribute('src', imagesPatch + images[i]);
          imgTagTop[0].parentNode.insertBefore(imgDownPlus, imgTop.lastChild);
          console.log("+1");
        }
      }

      positionSlide = 0;

      // Клонируем изображения в Down
      var btnDownNew = imgTop.cloneNode(true);
      btnDownNew.setAttribute('class', "slider__button-down");
      btnDownNew.setAttribute('id', "sliderBtnDown");
      btns.replaceChild(btnDownNew, btnDown);
      imgTagDown = btnDownNew.getElementsByTagName('img');
      console.log(imgTagDown);

      imgTagDown[counter(positionSlide - 1)].style.visibility = 'visible';
      imgTagDown[counter(positionSlide - 1)].style.top = '0';
      imgTagDown[counter(positionSlide)].style.top = '-100%';
      imgTagDown[counter(positionSlide)].style.visibility = 'hidden';
      imgTagDown[counter(positionSlide + 2)].style.top = '-100%';
      console.log("transition closed, poistion", positionSlide);
      ////////////////


      console.log(imgTop);
      console.log(imgTop.getElementsByTagName('img'));

      btnDownNew.addEventListener("click", DownImg);
      btnUp.addEventListener("click", UpImg);
    }

    function counter(positionSlide) {
      var result;
      if (positionSlide < 0) {
        result = images.length + positionSlide;
      } else if (positionSlide >= images.length) {
        result = positionSlide - images.length;
      } else {
        result = positionSlide;
      }

      return result;
    }

    function DownImg() {
      ////////////
      console.log(counter(positionSlide));
      console.log(counter(positionSlide - 1));
      console.log(counter(positionSlide - 2));
      ///////////
      imgTagDown[counter(positionSlide - 2)].style.visibility = 'visible';
      imgTagDown[counter(positionSlide - 2)].style.top = '0';
      imgTagDown[counter(positionSlide - 1)].style.top = '100%';
      imgTagDown[counter(positionSlide)].style.visibility = 'hidden';
      imgTagDown[counter(positionSlide)].style.top = '-100%';

      positionSlide = counter(positionSlide - 1);
      console.log("transition closed, poistion", positionSlide);
    }

    function UpImg() {
      ////////////
      console.log(counter(positionSlide));
      console.log(counter(positionSlide - 1));
      console.log(counter(positionSlide - 2));
      ///////////
      img[counter(positionSlide)].style.visibility = 'visible';
      img[counter(positionSlide)].style.top = '0';
      img[counter(positionSlide - 1)].style.top = '-100%';
      img[counter(positionSlide - 2)].style.visibility = 'hidden';
      img[counter(positionSlide - 2)].style.top = '100%';

      positionSlide = counter(positionSlide);
      console.log("transition closed, poistion", positionSlide);
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