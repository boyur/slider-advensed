'use strict';

window.onload = function () {
  console.log("window load");

  (function () {
    var slide = document.getElementById("slide");
    var btnDown = document.getElementById("sliderBtnDown");
    var btnUp = document.getElementById("sliderBtnUp");
    var imgDown = btnDown.getElementsByClassName("slider__button-img");
    var imgUp = btnUp.getElementsByClassName("slider__button-img");
    var imgTop = slide.getElementsByClassName("slider__slide-img");

    var contentArr = ['work-1','work-2','work-3','work-4'];

    var content = document.getElementById('content');
    var xhr = new XMLHttpRequest();

    var counter = 0;
    var counterDown = 3;
    var counterUp = 1;
    var flag = true;

    console.log(counterFn(counter));
    console.log(counterFn(counterDown));
    console.log(counterFn(counterUp));

    btnDown.addEventListener("click", down, false);
    btnUp.addEventListener("click", up, false);


    function down (){
      new Promise(function(resolve) {

        var flagTransition = true;

        var direction = -1;

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
          activeSlide[0].style.opacity = '0';
          imgTop[counterFn(counter + direction)].style.opacity = '1';

          imgDown[counterFn(counterDown + direction)].style.visibility = 'visible';
          imgDown[counterFn(counterDown + direction)].style.top = '0';

          console.log(imgUp);

          activeUp[0].style.top = '-110%';
          imgUp[counterFn(counterUp + direction)].style.visibility = 'visible';
          imgUp[counterFn(counterUp + direction)].style.top = '0';

          if (!flag && direction == -1){
            activeDown[0].addEventListener("transitionend", transitionEnd, false);
          } else if (!flag && direction == 1) {
            activeUp[0].addEventListener("transitionend", transitionEnd, false);
          }

        }

        function transitionEnd() {

          if (!flagTransition) {
            return;
          }

          activeSlide[0].style.opacity = '0';
          activeSlide[0].classList.remove("active-slide");

          if (direction == -1){
            imgTop[counterFn(counterDown)].classList.add("active-slide");
          } else {
            imgTop[counterFn(counterUp)].classList.add("active-slide");
          }


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

          console.log("animation end");
          flagTransition = false;

          resolve();
        }

        // Ajax

        xhr.open('GET', 'content/' + contentArr[counterFn(counter + direction)] + '.html', true); //
        xhr.onload = function() {
          content.innerHTML= this.responseText;
        };
        xhr.send();


      }).then(function() {
        flag = true;
        console.log("ready;");
      });

    }

    function up() {
      new Promise(function(resolve) {

        var flagTransition = true;

        var direction = 1;

        if (direction == undefined) {
          return;
        }

        var activeDown = btnDown.getElementsByClassName("active");
        var activeUp = btnUp.getElementsByClassName("active");
        var activeSlide = slide.getElementsByClassName("active-slide");

        // Ajax
        var content = document.getElementById('content');
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'content/' + contentArr[counter] + '.html', true); //
        xhr.onload = function() {
          content.innerHTML= this.responseText;
        };
        xhr.send();


        if (flag) {
          flag = false;

          console.log(activeDown[0]);

          activeDown[0].style.top = '110%';
          activeSlide[0].style.opacity = '0';
          imgTop[counterFn(counter + direction)].style.opacity = '1';

          imgDown[counterFn(counterDown + direction)].style.visibility = 'visible';
          imgDown[counterFn(counterDown + direction)].style.top = '0';

          console.log(imgUp);

          activeUp[0].style.top = '-110%';
          imgUp[counterFn(counterUp + direction)].style.visibility = 'visible';
          imgUp[counterFn(counterUp + direction)].style.top = '0';

          if (!flag && direction == -1){
            activeDown[0].addEventListener("transitionend", transitionEnd, false);
          } else if (!flag && direction == 1) {
            activeUp[0].addEventListener("transitionend", transitionEnd, false);
          }

        }

        function transitionEnd() {

          if (!flagTransition) {
            return;
          }

          activeSlide[0].style.opacity = '0';
          activeSlide[0].classList.remove("active-slide");

          if (direction == -1){
            imgTop[counterFn(counterDown)].classList.add("active-slide");
          } else {
            imgTop[counterFn(counterUp)].classList.add("active-slide");
          }


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

          console.log("animation end");
          flagTransition = false;
          resolve();
        }

        // Ajax
        xhr.open('GET', 'content/' + contentArr[counterFn(counter + direction)] + '.html', true); //
        xhr.onload = function() {
          content.innerHTML= this.responseText;
        };
        xhr.send();

      }).then(function() {
        flag = true;
        console.log("ready;");
      });
    }

    function scrollSlide(direction) {



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