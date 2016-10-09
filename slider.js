window.onload = function () {
  console.log("window load");

  (function () {
    var slide = document.getElementById("slide");
    var btnDown = document.getElementById("sliderBtnDown");
    var btnUp = document.getElementById("sliderBtnUp");
    var imgDown = btnDown.getElementsByClassName("slider__button-img");
    var imgUp = btnUp.getElementsByClassName("slider__button-img");
    var imgTop = slide.getElementsByClassName("slider__slide-img");

    var counter = 0;
    var counterDown = 3;
    var counterUp = 1;
    var flag = true;

    console.log(counterFn(counter));
    console.log(counterFn(counterDown));
    console.log(counterFn(counterUp));

    btnDown.addEventListener("click", down, false);
    btnUp.addEventListener("click", up, false);


    function down() {
      scrollSlide(-1);
    }

    function up() {
      scrollSlide(1);
    }

    function scrollSlide(direction) {

      // direction -1 = down, 1 = up


      if (direction == undefined) {
        return;
      }

      var activeDown = btnDown.getElementsByClassName("active");
      var activeUp = btnUp.getElementsByClassName("active");
      var activeSlide = slide.getElementsByClassName("active-slide");


      if (flag) {
        flag = false;

        console.log(activeDown[0]);

        activeDown[0].style.top = '110%';
        activeSlide[0].style.visibility = 'hidden';
        imgTop[counterFn(counter + direction)].style.visibility = 'visible';
        //console.log(counterFn(counter));

        imgDown[counterFn(counterDown + direction)].style.visibility = 'visible';
        imgDown[counterFn(counterDown + direction)].style.top = '0';

        console.log(imgUp);

        activeUp[0].style.top = '-110%';
        imgUp[counterFn(counterUp + direction)].style.visibility = 'visible';
        imgUp[counterFn(counterUp + direction)].style.top = '0';

        activeDown[0].addEventListener("transitionend", transitionEnd, false);

        function transitionEnd() {

          if (flag) {
            return;
          }

          activeSlide[0].style.visibility = 'hidden';
          activeSlide[0].classList.remove("active-slide");
          imgTop[counterFn(counterDown)].classList.add("active-slide");

          activeDown[0].style.visibility = 'hidden';
          activeDown[0].style.top = '-110%';
          activeDown[0].classList.remove("active");
          imgDown[counterFn(counterDown + direction)].classList.add("active");

          activeUp[0].style.visibility = 'hidden';
          activeUp[0].style.top = '110%';
          activeUp[0].classList.remove("active");
          imgUp[counterFn(counterUp + direction)].classList.add("active");

          counter = (counterFn(counter + direction));
          counterDown = (counterFn(counterDown + direction));
          counterUp = (counterFn(counterUp + direction));

          console.log(counter);
          console.log(counterDown);
          console.log(counterUp);

          flag = true;
          console.log("Анимация закончена");
        }
      }
    }

    function counterFn(positionSlide) {
      var result;
      if (positionSlide < 0) {
        result = imgDown.length + positionSlide;
      } else if (positionSlide >= imgDown.length) {
        result = positionSlide - imgDown.length;
      } else {
        result = positionSlide;
      }
      return result;
    }


  })();
};