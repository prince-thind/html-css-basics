const button = document.querySelector('#control-button');
const disc = document.querySelector('#disc');
let running = false;

button.addEventListener('click', main);

function delay(d) {
  return new Promise((resolve) => setTimeout(resolve, d));
}
function addClass(c, element = disc) {
  element.classList.add(c);
}
function removeClass(c, element = disc) {
  element.classList.remove(c);
}

function main() {
  if (running) {
    stopLogic();
  } else {
    runLogic();
  }

  function runLogic() {
    delay(0)
      .then(() => {
        running = true;
        addClass('animation1');
        return delay(1000);
      })
      .then(() => {
        removeClass('animation1');
        addClass('animation2');
        return delay(1000);
      })
      .then(() => {
        removeClass('animation2');
        addClass('animation3');
        return delay(1000);
      })
      .then(() => {
        removeClass('animation3');
        addClass('main-animation');
      });
  }

  function stopLogic() {
    delay(0)
      .then(() => {
        running = false;
        removeClass('main-animation');
        addClass('animation3');
        return delay(1000);
      })
      .then(() => {
        removeClass('animation3');
        addClass('animation2');
        return delay(1000);
      })
      .then(() => {
        removeClass('animation2');
        addClass('animation1');
        return delay(1000);
      })
      .then(() => {
        removeClass('animation1')
      });
  }
}
