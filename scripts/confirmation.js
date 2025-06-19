// Display the submission count on the review page
document.addEventListener("DOMContentLoaded", function() {
  const submissionCount = localStorage.getItem("submissionCount") || 0;
  const reviewMessage = document.querySelector("main p:last-of-type");
  reviewMessage.textContent = `You have submitted ${submissionCount} times.`;
});