const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const message = document.getElementById("validation");

function checkPasswordMatch() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    message.style.display = "none";
    passwordInput.style.borderColor = "#e5e7eb";
    confirmPasswordInput.style.borderColor = "#e5e7eb";
  } else {
    message.style.display = "block";
    passwordInput.style.borderColor = "red";
    confirmPasswordInput.style.borderColor = "red";
  }
}

passwordInput.addEventListener("input", checkPasswordMatch);
confirmPasswordInput.addEventListener("input", checkPasswordMatch);
