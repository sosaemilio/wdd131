const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Display the products in the select element
const productSelect = document.getElementById("productName");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Saves in LocalStorage for submissions times and display them in the review.html page
const form = document.querySelector(".product-review-form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the current count from localStorage or initialize it
  let submissionCount = parseInt(localStorage.getItem("submissionCount")) || 0;

  // Increment the count
  submissionCount++;

  // Save the updated count back to localStorage
  localStorage.setItem("submissionCount", submissionCount);

  // Redirect to review.html
  window.location.href = "review.html";
});

