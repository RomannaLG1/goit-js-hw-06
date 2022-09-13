/* <p><a href="index.html">Go back</a></p>

    <input id="font-size-control" type="range" min="16" max="96" />
    <br />
    <span id="text">Abracadabra!</span> */

const getInputEl = document.querySelector("input");
const getSpanEl = document.querySelector("span");

getSpanEl.style.fontSize = `${getInputEl.value}px`;

getInputEl.addEventListener("change", () => {
  const getSizeEl = getInputEl.value;
  console.log(getSizeEl);
  getSpanEl.style.fontSize = `${getSizeEl}px`;
});
