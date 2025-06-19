// Saves in LocalStorage for submissions times and display them in the review.html page
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the current count from localStorage or initialize it
  let submissionCount = parseInt(localStorage.getItem("submissionCount")) || 0;

  // Increment the count
  submissionCount++;

  // Save the updated count back to localStorage
  localStorage.setItem("submissionCount", submissionCount);

  // Redirect to review.html
  window.location.href = "confirmation.html";
});