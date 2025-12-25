const contactForm = document.querySelector(".contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const emailAddress = document.getElementById("emailAddress").value.trim();
  const mobileNumber = document.getElementById("mobileNumber").value.trim();
  const country = document.getElementById("country").value;
  const message = document.getElementById("message").value.trim();

  const genderSelected = document.querySelector(
    'input[name="gender"]:checked'
  );

  const skillsSelected = document.querySelectorAll(
    '.checkboxGroup input[type="checkbox"]:checked'
  );

  if (fullName === "") {
    alert("Please enter your full name");
    return;
  }

  if (emailAddress === "") {
    alert("Please enter your email");
    return;
  }

  if (mobileNumber.length !== 10) {
    alert("Please enter a valid 10-digit mobile number");
    return;
  }

  if (!genderSelected) {
    alert("Please select your gender");
    return;
  }

  if (skillsSelected.length === 0) {
    alert("Please select at least one skill");
    return;
  }

  if (country === "Select Country") {
    alert("Please select your country");
    return;
  }

  alert("✅ Form submitted successfully!");

  contactForm.reset();
});
