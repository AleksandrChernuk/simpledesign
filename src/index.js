const accContainer = document.querySelectorAll(".accordion-items");

for (let i = 0; i < accContainer.length; i += 1) {
  const element = accContainer[i];
  element.addEventListener("click", () => element.classList.toggle("activ"));
}
