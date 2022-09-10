/* <p><a href="index.html">Go back</a></p>

    <input id="font-size-control" type="range" min="16" max="96" />
    <br />
    <span id="text">Abracadabra!</span> */

    const getInputEl = document.querySelector('input');
    console.log(getInputEl);
    const defaultVal = getInputEl.defaultVal;
    const minValue = 16;
    const currentValue = getInputEl.minValue;
    console.log(currentValue);
    console.log(defaultVal);

    