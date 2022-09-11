/* <p><a href="index.html">Go back</a></p>

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div> */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const getControlsEl = document.querySelector('#controls');
const getInputEl = document.querySelector('input');
const getCreateEl = document.querySelector('[data-create]');
const getDestroyEl = document.querySelector('[data-destroy]');
const getBoxesEl = document.querySelector('#boxes')

function createBoxes() {
  getInputEl.addEventListener('input', () => {
  const getInputValue = Number(getInputEl.value) ;

const arrValue = [];
for (let i = 0; i<=getInputValue; i++) {
 
  arrValue.push(i);
  
}
console.log(arrValue);

arrValue.forEach((element, idx) => {
  const elementWidth = 10 * idx + 1;
  const elementHeight = 10 * idx + 1;
  element = `<div class="chip" style="
  background-color: ${getRandomHexColor()}; 
  width: ${elementWidth}px; 
  height: ${elementHeight}px;
  margin-top: 5px;
  ">
  </div>`; 

  getBoxesEl.insertAdjacentHTML('afterbegin', element);
})

});
}


getCreateEl.addEventListener('click', createBoxes);

getDestroyEl.addEventListener('click', reset);

function reset() {
  const divs = document.querySelectorAll('.chip');
  for (const div of divs) {
     div.remove();
  }
  
 

}

// const createBoxes = () => {

//   const markup = `<div class="chip" style="
//   backgroundColor:${getRandomHexColor()}; 
//   width:20px; 
//   height:20px"; 
//  >
//   </div>`; 

//   getBoxesEl.insertAdjacentHTML('afterbegin', markup);
// }




// getCreateEl.addEventListener("click", createBoxes);




