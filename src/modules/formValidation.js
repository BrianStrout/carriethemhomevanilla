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
  console.log("GOIGM FOR ALL");
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
    verNamePass = true;
    allFieldsValid();
    return true;
  } else {
    console.log("fail name");

    return false;
  }
}
function verEmail(str) {
  regexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (regexp.test(str)) {
    console.log("email pass");
    verEmailPass = true;
    allFieldsValid();
    return true;
  } else {
    console.log("not a valid email");
    return false;
  }
}
//   message
function verMessage(str) {
  regexp = /.{8}/;
  if (regexp.test(str)) {
    console.log("message pass");
    verMessagePass = true;
    allFieldsValid();
    return true;
  } else {
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

// const formSubmit = (e) => {
//   e.preventDefault();

//   let allPass = false;
//   let formData = {
//     tes: "test",
//     service_id: "service_cg4lo4s",
//     template_id: "template_fejt36a",
//     form: document.getElementById("myForm"),
//     user_id: "sMWYJVw_Of2YBvfKm",
//     template_params: {
//       "sender-name": "James",
//       "sender-email": "test@fake.com",
//     },
//   };

//   let b = {
//     bname: formSelector.name,
//   };
//   let bbname = formSelector.name.value;
//   // console.log("submitting");
//   console.log(b);
//   const serviceID = "service_cg4lo4s";
//   const templateID = "template_fejt36a";
//   const tt = formData.tes;
//   const params = {
//     fromName: document.getElementById("fromName").value,
//     fromEmail: document.getElementById("fromEmail").value,
//     message: document.getElementById("message").value,
//   };
//   console.log(params);
//   console.log("^^^ params");

//   emailjs.send(serviceID, templateID, params).then((response) => {
//     console.log(params);

//     alert("Thanks for your email!");
//   });
//   return;
// };

export { verName, verEmail, verMessage, validator };
