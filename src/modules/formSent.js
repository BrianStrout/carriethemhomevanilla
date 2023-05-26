let form = document.getElementById("contactForm");

const formSent = () => {
  form.innerHTML = `
  <div class="form--sent">
  Thanks for reaching out to Carrie Them Home. <br />
  I'll get back to you as soon as possible.<br /><br />
  -Carrie
</div>`;
};

export { formSent };
