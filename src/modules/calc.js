const calc = () => {
  const calc = document.querySelector("#calc");
  const calcType = document.querySelector("#calc-type");
  const calcTypeMaterial = document.querySelector("#calc-type-material");
  const calcInput = document.querySelector("#calc-input");
  const calcTotal = document.querySelector("#calc-total");

  calc.addEventListener("input", (e) => {
    let total = 1;
    console.log(calcTotal.value);

    if (
      calcType.value !== "--" &&
      calcTypeMaterial.value !== "--" &&
      calcInput.value !== ""
    ) {
      total = calcType.value * calcTypeMaterial.value * calcInput.value;
      calcTotal.value = total;
    }
  });
};

export default calc;
