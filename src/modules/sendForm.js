const sendForm = ({ formId, someElem = [] }) => {
  const form = document.querySelector(`#${formId}`);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка";
  const errorText = "Ошибка";
  const successText = "Спасибо! Наш менеджер с вами свяжется";

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      if (val !== "") {
        formBody[key] = val;
      }
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (element) {
        if (element.textContent !== "") {
          formBody[elem.id] = element.textContent;
        } else if (element.value !== "") {
          formBody[elem.id] = element.value;
        }
      }
    });

    sendData(formBody)
      .then((data) => {
        statusBlock.textContent = successText;

        formElements.forEach((input) => {
          input.value = "";
        });
      })
      .catch((error) => {
        statusBlock.textContent = errorText;
      });
    setTimeout(() => {
      statusBlock.textContent = "";
    }, 4000);
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
