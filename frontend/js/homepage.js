// REVIEW: these are the step 1/2/3 instruction cards, but clicking one toggles a
// "selected" checkmark state that doesn't do anything. It can make users think the
// cards are selectable. Consider removing this or giving the selection a real
// purpose.
document.querySelectorAll(".card-group .card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("card-selected");
  });
});
