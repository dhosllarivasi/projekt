const yearElement = document.getElementById("viti");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.classList.add("was-validated");
      return;
    }

    const status = document.getElementById("formStatus");
    if (status) {
      status.innerHTML = '<div class="alert alert-success mb-0" role="alert">Thank you! Your message has been prepared.</div>';
    }
    contactForm.reset();
    contactForm.classList.remove("was-validated");
  });
}