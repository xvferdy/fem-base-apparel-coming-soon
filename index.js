let form = document.getElementById("form");
let email = document.getElementById("email");
let text = document.getElementById("text");

let softRed = "hsl(0, 93%, 68%)";

function validation() {
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if (email.value.match(pattern)) {
		form.classList.add("form--valid");
		form.classList.remove("form--invalid");
		text.innerHTML = "";
		email.style.border = "1px solid lightgray";
	} else {
		form.classList.remove("form--valid");
		form.classList.add("form--invalid");
		text.innerHTML = "Please provide a valid email";
		email.style.border = `2px solid ${softRed}`;
	}
	if (email.value == "") {
		form.classList.remove("form--valid");
		form.classList.remove("form--invalid");
		text.innerHTML = "Email required";
		email.style.border = `2px solid ${softRed}`;
	}
}
