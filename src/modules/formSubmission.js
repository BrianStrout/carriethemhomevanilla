// import { formResetter } from "./formReset.js";

import { formSent } from "./formSent.js";

const submitter = (e) => {
  // e.preventDefault();
  const formSelector = document.getElementById("contactForm");
  const serviceID = "service_66cs5yn";
  const templateID = "template_43yitzb";
  emailjs
    .sendForm("contact_service", templateID, formSelector, "oYymItkIoREaVvBlM")
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      // alert("SUCCESS!");
    });

  formSent();
};

export { submitter };
