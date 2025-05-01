console.log("Netflix Clone Ready!");

// FAQ toggle
const questions = document.querySelectorAll(".faq-question");
questions.forEach(q => {
  q.addEventListener("click", () => {
    q.classList.toggle("active");
    const answer = q.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// Email submission
function handleSubmit() {
  const email = document.getElementById("email").value;
  if (!email.trim()) {
    alert("Please enter a valid email.");
  } else {
    alert(`Thanks! Your email: ${email}`);
  }
}

// Slider buttons
function slideLeft() {
  const slider = document.getElementById('movieSlider');
  slider.scrollBy({ left: -300, behavior: 'smooth' });
}

function slideRight() {
  const slider = document.getElementById('movieSlider');
  slider.scrollBy({ left: 300, behavior: 'smooth' });
}

// Prevent all <a> tags from reloading the page
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  });
});

// Login validation
const validUsername = "admin";
const validPassword = "password123";

function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === validUsername && password === validPassword) {
    alert("Login successful!");
    return true;
  } else {
    document.getElementById("message").innerText = "Invalid username or password!";
    return false;
  }
}

document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    answer.classList.toggle('collapse');
  });
});

