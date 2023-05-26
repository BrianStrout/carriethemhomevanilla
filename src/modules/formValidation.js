import { submitter } from "./formSubmission.js";

const formSelector = document.getElementById("contactForm");
const formName = document.getElementById("formName");
const formEmail = document.getElementById("formEmail");
const formMessage = document.getElementById("formMessage");
let verNamePass = false;
let verEmailPass = false;
let verMessagePass = false;
let regexp;

function allFieldsValid() {
  console.log("GOING FOR ALL");
  if (verNamePass && verEmailPass && verMessagePass) {
    console.log("all fields pass!");
    submitter();
  } else {
    console.log("field failure");
    console.log(verNamePass, verEmailPass, verMessagePass);
  }
}

function verName(str) {
  regexp = /^[a-z a-z]+$/gi;
  if (regexp.test(str)) {
    console.log("name pass");
    formName.classList.remove("invalid");
    verNamePass = true;
    allFieldsValid();
    return true;
  } else {
    formName.classList.add("invalid");
    console.log("fail name");
    console.log(formName.after);

    return false;
  }
}
function verEmail(str) {
  regexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (regexp.test(str)) {
    console.log("email pass");
    verEmailPass = true;
    formEmail.classList.remove("invalid");
    allFieldsValid();
    return true;
  } else {
    formEmail.classList.add("invalid");
    console.log("not a valid email");
    return false;
  }
}
//   message
function verMessage(str) {
  regexp = /.{8}/;
  if (regexp.test(str)) {
    console.log("message pass");
    formMessage.classList.remove("invalid");
    verMessagePass = true;
    allFieldsValid();
    return true;
  } else {
    formMessage.classList.add("invalid");
    console.log("fail");
    return false;
  }
}

const validator = () => {
  console.log("validating?");
  verName(document.getElementById("formName").value);
  verEmail(document.getElementById("formEmail").value);
  verMessage(document.getElementById("formMessage").value);
};

export { verName, verEmail, verMessage, validator };
