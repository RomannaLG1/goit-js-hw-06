function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по 
// кліку на button.change-color і виводить значення кольору в span.color.
const getBodyEl = document.body;
const getButtonEl = document.querySelector('.change-color');
const getSpanEl = document.querySelector('.color');

const onChangeColor = () => {
  getSpanEl.textContent = getRandomHexColor();
getBodyEl.style.backgroundColor = getRandomHexColor();
getButtonEl.style.backgroundColor = getRandomHexColor();
}

getButtonEl.addEventListener('click', onChangeColor);

