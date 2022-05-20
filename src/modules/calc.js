const calc = () => {
  const calc = document.querySelector("#calc");
  const calcType = document.querySelector("#calc-type");
  const calcTypeMaterial = document.querySelector("#calc-type-material");
  const calcInput = document.querySelector("#calc-input");
  const calcTotal = document.querySelector("#calc-total");

  if (document.querySelector("#calc")) {
    calc.addEventListener("input", (e) => {
      let total = 1;
      if (
        calcType.value !== "--" &&
        calcTypeMaterial.value !== "--" &&
        calcInput.value !== ""
      ) {
        total = calcType.value * calcTypeMaterial.value * calcInput.value;
        calcTotal.value = Math.floor(total);
      }
    });
  }
};

export default calc;
