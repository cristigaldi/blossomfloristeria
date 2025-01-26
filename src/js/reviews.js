// Variables para seleccionar elementos
const reviewText = document.getElementById("review-text");
const reviewAuthor = document.getElementById("review-author");
const reviewRating = document.getElementById("review-rating");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Variables de estado
let reviews = [];
let currentReview = 0;

// Función para mostrar una reseña
function showReview(index) {
  const review = reviews[index];
  reviewText.textContent = review.text;
  reviewAuthor.textContent = review.author;
  reviewRating.textContent = review.rating; // Mostrar las estrellas directamente
}

// Función para cargar las reseñas desde el archivo JSON
function loadReviews() {
  fetch("src/json/reviews.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      return response.json();
    })
    .then((data) => {
      reviews = data;
      showReview(currentReview); // Mostrar la primera reseña
    })
    .catch((error) => console.error("Error:", error));
}

// Eventos para cambiar reseñas
prevBtn.addEventListener("click", () => {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  showReview(currentReview);
});

nextBtn.addEventListener("click", () => {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
});

// Cargar las reseñas al inicio
loadReviews();
