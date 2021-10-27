

function handle_form_submission() {
  const contactForm = document.getElementById("contactForm");

  contactForm.innerHTML = "<h2>Thank you, I will contact you soon</h2>";
  return false;
}
