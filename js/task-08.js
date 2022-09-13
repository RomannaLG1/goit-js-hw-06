const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Dear Catherine, please fill in all the fields!");
  }

  const massegeInfo = { email: email.value, password: password.value };

  console.log(massegeInfo);
  event.currentTarget.reset();
}
