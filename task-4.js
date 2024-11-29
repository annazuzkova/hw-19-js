// const input = document.querySelector("#name-input");
// const span = document.querySelector("#name-output");
// const inputHandler = () => {
//   if (input.value !== "") {
//     span.textContent = input.value;
//   } else {
//     span.textContent = "незнайомець";
//   }
// };
// console.log(input);
// input.addEventListener("input", inputHandler);
const validInput = document.querySelector("#validation-input");
const validInputHandler = () => {
  if (validInput.value.length !== 6) {
    validInput.classList.add("invalid");
  }
  if (validInput.value.length === 6) {
    validInput.classList.replace("invalid", "valid");
  }
};
validInput.addEventListener("input", validInputHandler);
