(function() {
  const button = document.querySelector('#control-button');
  const disc = document.querySelector('#disc');
  let discRunning = false;

  button.addEventListener('click', main);

  function main() {
    if (discRunning) {
      discRunning = false;
      disc.classList.remove('main-animation');
    } else {
      discRunning = true;
      disc.classList.add('main-animation');
    }
  }
})();
