
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



  // document.addEventListener("DOMContentLoaded", function () {
  //   const getStartedBtn = document.querySelector(".email-form button");
  //   const emailInput = document.querySelector(".email-form input");

  //   getStartedBtn.addEventListener("click", function () {
  //     const email = emailInput.value.trim();

  //     // Simple email validation
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //     if (email === "") {
  //       alert("Please enter your email address.");
  //     } else if (!emailRegex.test(email)) {
  //       alert("Please enter a valid email address.");
  //     } else {
  //       alert(Thanks for joining! We'll contact you at: ${email});
  //       // Optionally, redirect to another page
  //       // window.location.href = "register.html";
  //     }
  //   });
  // });

  document.addEventListener("DOMContentLoaded", function () {
    const getStartedBtn = document.getElementById("getStartedBtn");
    const emailInput = document.getElementById("emailInput");
    const heading = document.querySelector(".main-heading");
    const subText = document.querySelector(".sub-text");

    getStartedBtn.addEventListener("click", function () {
      const email = emailInput.value.trim();

      // Darken heading and subtext
      heading.style.opacity = "0.5";
      subText.style.opacity = "0.5";

      // Focus and highlight email input if empty
      if (email === "") {
        emailInput.focus();
        emailInput.style.border = "2px solid red";
        emailInput.style.backgroundColor = "#ffe6e6";
      } else {
        alert("Thanks for signing up with: " + email);
        // Optional: Redirect or do something
      }
    });

    // Optional: Reset styles on input
    emailInput.addEventListener("input", function () {
      emailInput.style.border = "";
      emailInput.style.backgroundColor = "";
      heading.style.opacity = "1";
      subText.style.opacity = "1";
    });
  });