const validate = () => {
  const allInput = document.querySelectorAll("input");
  const sendFormBtn = document.querySelectorAll("#sendFormBtn");
  let sendCheckName = false;
  let sendCheckPhone = false;

  //   if (validateName) /^.+@.+\..$/gim;

  allInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      const newEl = document.createElement("span");
      newEl.classList.add("_error");
      input.value = input.value.trim();
      if (e.target.closest("[data-validate-name]")) {
        if (input.value.match(/[^А-Яа-я\A-Za-z\s]/gi)) {
          if (!input.classList.contains("_error")) {
            sendCheckName = false;
            newEl.setAttribute("data-validation-name-err", "");
            newEl.textContent =
              "Имя может состоять только из русских и латинских символов";
            e.target.after(newEl);
            input.classList.add("_error");
            input.style.boxShadow = "0px 0px 1px 1px red";
          }
        } else if (
          input.classList.contains("_error") &&
          document.querySelector("[data-validation-name-err]")
        ) {
          const err = document.querySelector("[data-validation-name-err]");
          sendCheckName = true;

          err.remove();
          input.classList.remove("_error");
          input.style.boxShadow = "";
        }

        if (
          (input.value.length < 2 && input.value.length > 0) ||
          input.value == ""
        ) {
          if (!input.classList.contains("_error")) {
            sendCheckName = false;
            newEl.setAttribute("data-validation-name-err", "");
            newEl.textContent = "Длина данных должнать быть больше 2 символов";
            e.target.after(newEl);
            input.classList.add("_error");
            input.style.boxShadow = "0px 0px 1px 1px red";
          }
        } else if (
          input.classList.contains("_error") &&
          document.querySelector("[data-validation-name-err]")
        ) {
          const err = document.querySelector("[data-validation-name-err]");
          sendCheckName = true;
          err.remove();
          input.classList.remove("_error");
          input.style.boxShadow = "";
        }

        input.value = input.value.replace(/[^А-Яа-я\A-Za-z\s\-]/g, "");
      } else if (e.target.closest("[data-validate-email]")) {
        input.value = input.value.replace(/[^\w\@\~\-\.\!\~\*]/g, "");
      } else if (e.target.closest("[data-validate-phone]")) {
        input.setAttribute("maxlength", "16");
        if (input.value.match(/[^0-9\()\-\+]/g)) {
          if (!input.classList.contains("_error")) {
            sendCheckPhone = false;
            newEl.setAttribute("data-validation-phone-err", "");
            newEl.textContent = "Телефон может состоять только из цифр";
            e.target.after(newEl);
            input.classList.add("_error");
            input.style.boxShadow = "0px 0px 1px 1px red";
          }
        } else if (
          input.classList.contains("_error") &&
          document.querySelector("[data-validation-phone-err]")
        ) {
        }
        if (input.value == "") {
          sendCheckPhone = false;
        } else if (input.value.length < 6) {
          sendCheckPhone = false;

          if (!document.querySelector("[data-validation-phone-err]")) {
            newEl.setAttribute("data-validation-phone-err", "");
            newEl.textContent = "";
            e.target.after(newEl);
            input.classList.add("_error");
            input.style.boxShadow = "0px 0px 1px 1px red";
          } else if (input.value.match(/[0-9\()\-\+]/g)) {
            const err = document.querySelector("[data-validation-phone-err]");
            err.textContent = "Телефон должен состоять более чем из 6 символов";
            
          }
        } else if (
          input.value.length > 6 &&
          document.querySelector("[data-validation-phone-err]")
        ) {
          const err = document.querySelector("[data-validation-phone-err]");
          sendCheckPhone = true;
          input.classList.remove("_error");
          input.style.boxShadow = "";
          err.remove();
        }
        input.value = input.value.replace(/[^0-9\+]/g, "");
      }
    });
  });
  sendFormBtn.forEach((sendBtn) => {
    sendBtn.addEventListener("click", (e) => {
      if (sendCheckName === false || sendCheckPhone === false) {
        e.preventDefault();
      }
    });
  });
};

export default validate;
