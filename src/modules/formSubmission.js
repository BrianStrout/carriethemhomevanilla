import { formResetter } from "./formReset.js";

const submitter = (e) => {
  // e.preventDefault();
  const formSelector = document.getElementById("contactForm");
  const serviceID = "service_kyqoxgr";
  const templateID = "template_36awvk9";
  emailjs
    .sendForm("contact_service", templateID, formSelector, "oYymItkIoREaVvBlM")
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      // alert("SUCCESS!");
    });

  formResetter();
};

export { submitter };
