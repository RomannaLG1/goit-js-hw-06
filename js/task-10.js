function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const getControlsEl = document.querySelector('#controls');
const getInputEl = document.querySelector('input');
const getInputValue = getInputEl.number;
console.log(getInputEl.attributes);
// console.log(getInputEl);