const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = formEl.elements;

  if (!email.value || !password.value) {
    alert("All fields must be filled in!");
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);

  formEl.reset();
});
