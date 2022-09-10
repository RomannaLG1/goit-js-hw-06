// {/* <p><a href="index.html">Go back</a></p>

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1> */}



const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};

console.log(refs.span.textContent);

refs.input.addEventListener('input', onInputChange);

function onInputFocus() {
    console.log('focus');
}

function onInputBlur() {
    console.log('blur');
}

let textContentSpan = refs.span.innerHTML;

function onInputChange(event) {
    refs.span.textContent = event.currentTarget.value.length === 0 
    ? 'Anonymous' //textContentSpan //
    : event.currentTarget.value ;


}