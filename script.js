function checkStrength() {
  const password = document.getElementById("password").value;
  const message = document.getElementById("strengthMessage");

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (strength <= 2) {
    message.textContent = "Weak Password🟠";
    message.style.color = "red";
  } else if (strength === 3 || strength === 4) {
    message.textContent = "Medium Strength🟡";
    message.style.color = "orange";
  } else if (strength === 5) {
    message.textContent = "Strong Password🟢";
    message.style.color = "green";
  } else {
    message.textContent = "";
  }
}
