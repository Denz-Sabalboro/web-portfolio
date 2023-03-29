const email = document.querySelector("#email");
const formSubmit = document.querySelector("#form-submit");
const fullName = document.querySelector("#full-name");
const input = document.getElementsByClassName(".input");

formSubmit.addEventListener("click", function() {
	alert("Hi " + fullName.value + ". I will surely response within my reach in your " + email.value + ". Thank you and have a wonderful day!");
});

