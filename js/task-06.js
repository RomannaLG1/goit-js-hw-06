// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст
//  щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
// якщо неправильна кількість - червоним.
const inputEl = document.querySelector('#validation-input')
const inputLength = inputEl.getAttribute('data-length');
  console.log(inputLength);

inputEl.addEventListener('blur', onInputChange);


function onInputChange() {

    // inputEl = event.currentTarget.value;
    if (inputEl.value.length == inputLength) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
}

