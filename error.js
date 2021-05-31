const email = document.querySelector("#email");
const btn = document.querySelector(".container__notify");
const error = document.querySelector(".container__error-text");

const validateEmail = (email => {
   let emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
   return emailPattern.test(email);
})

btn.addEventListener("click", e => {
   if (email.value === "" || !validateEmail(email.value)) {
      e.preventDefault()
      email.style.border = "5px solid #FF5466";
      error.style.display = "block";
   } else {
      email.style.border = "5px solid #4C7BF3"
      error.style.display = "none";
   }
})