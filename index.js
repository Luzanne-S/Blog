let id = (id) => document.getElementById(id);
let name = id("name");
let email = id("email");
let form = id("contactForm");

function handle_form_submission() {
  alert("Thank you, I will contact you soon");
  return false;
}
