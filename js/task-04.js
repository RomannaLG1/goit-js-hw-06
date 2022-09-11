// {/* <div id="counter">
// <button type="button" data-action="decrement">-1</button>
// <span id="value">0</span>
// <button type="button" data-action="increment">+1</button>
// </div>
// <button type="button" data-action="reset">Reset</button>

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const resetBtn = document.querySelector('button[data-action="reset"]');
let valueEl = document.querySelector('#value');

let counterEl = 0;

incrementBtn.addEventListener("click", () => {
 
  counterEl +=1;
  valueEl.textContent = counterEl;
});

decrementBtn.addEventListener("click", () => {
  
  counterEl -=1;
  valueEl.textContent = counterEl;
});

resetBtn.addEventListener("click", () => {
 
  counterEl = 0;
  valueEl.textContent = counterEl;
});

console.log(resetBtn.style);
resetBtn.style.marginLeft = '15px';
resetBtn.style.marginTop = '10px';

