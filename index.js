const input = document.querySelector('input');

const debounce = (func, wait) => {
  let timerID = null;
  return () => {
    if (timerID) clearTimeout(timerID);
    timerID = setTimeout(() => {
      func();
    }, wait);
  };
};

input.addEventListener(
  'keyup',
  debounce((e) => {
    console.log(input.value);
  }, 1000)
);
