window.addEventListener("DOMContentLoaded", () => {
  const LoginButton = document.getElementById("LoginBtn");

  LoginButton.addEventListener("click", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Please fill in both username and password");
      return;
    }

    alert("submitted");

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  });
});