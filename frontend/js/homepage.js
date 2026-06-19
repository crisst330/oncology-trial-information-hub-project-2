document.querySelectorAll(".card-group .card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("card-selected");
  });
});
