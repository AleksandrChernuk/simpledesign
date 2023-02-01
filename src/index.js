const btnUpDown = document.querySelectorAll(".accordion-btn");
const accText = document.querySelectorAll(".accordion-text");
const accContainer = document.querySelectorAll(".accordion-items");

btnUpDown.forEach((e) =>
  e.addEventListener("click", (e) => {
    accContainer.forEach((e) => e.classList.toggle("closed"));

    accText.forEach((e) => {
      e.classList.toggle("show");
    });
  }),
);
