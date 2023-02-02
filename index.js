const btnUpDown = document.querySelectorAll(".accordion-btn");
const accText = document.querySelectorAll(".accordion-text");
const accContainer = document.querySelectorAll(".accordion-items");

// btnUpDown.forEach((e) =>
//   e.addEventListener("click", (e) => {
//     accContainer.forEach((e) => e.classList.toggle("closed"));

//     accText.forEach((e) => {
//       e.classList.toggle("show");
//     });
//   }),
// );
for (let i = 0; i < accContainer.length; i += 1) {
  const element = accContainer[i];
  element.addEventListener("click", () => element.classList.toggle("activ"));
}
