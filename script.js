
  console.log("Netflix Clone Ready!");


const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
  q.addEventListener("click", () => {
    q.classList.toggle("active");
    const answer = q.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

  function handleSubmit() {
    const email = document.getElementById("email").value;
    if (!email.trim()) {
      alert("Please enter a valid email.");
    } else {
      alert("Thanks! Redirecting you to the signup page...");
    }
  }




  function handleSubmit() {
    const email = document.getElementById("email").value;
    if (email.trim() !== "") {
      alert(`Thanks! Your email: ${email}`);
    } else {
      alert("Please enter your email address!");
    }
  }
  


  function slideLeft() {
    const slider = document.getElementById('movieSlider');
    slider.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }
  
  function slideRight() {
    const slider = document.getElementById('movieSlider');
    slider.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
  

  
  