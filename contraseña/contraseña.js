const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const message = document.getElementById("message");
const verificarBtn = document.getElementById("verificar-btn");

verificarBtn.addEventListener("click", () => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    message.textContent = "Las contraseñas coinciden.";
    message.style.color = "green";
  } else {
    message.textContent = "Las contraseñas no coinciden.";
    message.style.color = "red";
  }
});


