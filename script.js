document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menu-button");
  var navLinks = document.getElementById("nav-links");
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  var themeButton = document.getElementById("theme-button");
  if (themeButton) {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      themeButton.textContent = "Light mode";
    }
    themeButton.addEventListener("click", function () {
      var dark = document.body.classList.toggle("dark");
      localStorage.setItem("theme", dark ? "dark" : "light");
      themeButton.textContent = dark ? "Light mode" : "Dark mode";
    });
  }
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var message = document.getElementById("message").value.trim();
      var result = document.getElementById("form-result");
      if (!name || !email || !message) {
        result.textContent = "Please fill in your name, email, and message.";
        result.className = "error";
        return;
      }
      if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        result.textContent = "Please enter a valid email address.";
        result.className = "error";
        return;
      }
      result.textContent = "Thank you, " + name + ". Your message is ready. Please email me directly at mi397@njit.edu or mibrahimm0100@gmail.com, because this static form cannot send messages on its own.";
      result.className = "success";
    });
  }
});
