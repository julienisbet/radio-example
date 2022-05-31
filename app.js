const button = document.getElementById("pick-me");

button.addEventListener("click", () => {
  const selected = document.querySelector('input[type="radio"]:checked');
  console.log("i have selected #: ", selected.value);
});
