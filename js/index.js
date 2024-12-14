const ratingForm = document.querySelector('[data-js="rating-form"]');
const selectedRating = document.querySelector('[data-js="selected-rating"]');
const selectedDialog = document.querySelector('[data-js="selected-dialog"]');

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  selectedRating.textContent = data.rating || 0;
  selectedDialog.showModal();
  event.target.reset();
});

selectedDialog.addEventListener("click", () => {
  selectedDialog.close();
});
