const form = document.querySelector(".form");
const body = document.querySelector("body");
const radioHandler = (event) => {
  if (event.target.type !== "radio") {
    return;
  }
  if (event.target.type === "radio") {
    body.style.backgroundColor = event.target.value;
  }
};
form.addEventListener("change", radioHandler);
