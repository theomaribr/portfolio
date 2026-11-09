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

document.addEventListener("DOMContentLoaded", function () {
  var rock = document.getElementById("game-rock");
  var paper = document.getElementById("game-paper");
  var scissors = document.getElementById("game-scissors");
  var result = document.getElementById("game-result");
  var score = document.getElementById("game-score");
  var reset = document.getElementById("game-reset");
  if (!rock || !paper || !scissors || !result || !score) {
    return;
  }
  var wins = 0;
  var losses = 0;
  var choices = ["Rock", "Paper", "Scissors"];
  function updateScore() {
    score.textContent = "You: " + wins + " | Computer: " + losses;
  }
  function play(player) {
    if (wins >= 5 || losses >= 5) {
      return;
    }
    var computer = choices[Math.floor(Math.random() * 3)];
    if (player === computer) {
      result.textContent = "You both picked " + player + ". It is a tie.";
    } else if ((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper")) {
      wins++;
      result.textContent = "You picked " + player + ", computer picked " + computer + ". You win this round.";
    } else {
      losses++;
      result.textContent = "You picked " + player + ", computer picked " + computer + ". Computer wins this round.";
    }
    if (wins >= 5) {
      result.textContent += " You won the game, 5 to " + losses + ".";
    } else if (losses >= 5) {
      result.textContent += " Computer won the game, 5 to " + wins + ".";
    }
    updateScore();
  }
  rock.addEventListener("click", function () { play("Rock"); });
  paper.addEventListener("click", function () { play("Paper"); });
  scissors.addEventListener("click", function () { play("Scissors"); });
  if (reset) {
    reset.addEventListener("click", function () {
      wins = 0;
      losses = 0;
      result.textContent = "Pick one to start.";
      updateScore();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var start = document.getElementById("f1-start");
  var clickBtn = document.getElementById("f1-click");
  var result = document.getElementById("f1-result");
  var bestEl = document.getElementById("f1-best");
  if (!start || !clickBtn || !result) {
    return;
  }
  var lights = [1, 2, 3, 4, 5].map(function (n) { return document.getElementById("f1-light-" + n); });
  var timers = [];
  var startTime = 0;
  var waiting = false;
  var best = null;
  try {
    var saved = localStorage.getItem("f1-best");
    if (saved) { best = parseInt(saved, 10); bestEl.textContent = "Best time: " + best + " ms"; }
  } catch (e) {}
  function clearLights() {
    lights.forEach(function (l) { l.classList.remove("on"); l.classList.remove("go"); });
  }
  function clearTimers() {
    timers.forEach(function (t) { clearTimeout(t); });
    timers = [];
  }
  start.addEventListener("click", function () {
    clearTimers();
    clearLights();
    waiting = false;
    result.textContent = "Wait for the lights...";
    lights.forEach(function (l, i) {
      timers.push(setTimeout(function () { l.classList.add("on"); }, 500 * (i + 1)));
    });
    timers.push(setTimeout(function () {
      clearLights();
      lights.forEach(function (l) { l.classList.add("go"); });
      startTime = Date.now();
      waiting = true;
      result.textContent = "GO! Click now!";
    }, 2500 + Math.floor(Math.random() * 2000)));
  });
  clickBtn.addEventListener("click", function () {
    if (!waiting) {
      if (startTime === 0 && result.textContent.indexOf("Wait") !== -1) {
        clearTimers();
        clearLights();
        result.textContent = "Too early! Hit start and try again.";
      }
      return;
    }
    var ms = Date.now() - startTime;
    waiting = false;
    result.textContent = "Your reaction time: " + ms + " ms.";
    if (best === null || ms < best) {
      best = ms;
      try { localStorage.setItem("f1-best", String(ms)); } catch (e) {}
      bestEl.textContent = "Best time: " + best + " ms - new best!";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll("main section");
  sections.forEach(function (s) { s.classList.add("reveal"); });
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(function (s) { observer.observe(s); });
  } else {
    sections.forEach(function (s) { s.classList.add("visible"); });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var counters = document.querySelectorAll("[data-count]");
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var current = 0;
    var step = Math.max(1, Math.floor(target / 30));
    var timer = setInterval(function () {
      current += step;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = current;
      }
    }, 30);
  }
  if ("IntersectionObserver" in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { counterObserver.observe(c); });
  }
});
