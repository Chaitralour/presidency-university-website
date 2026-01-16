document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || message === "") {
        document.getElementById("formError").innerText = "All fields are required!";
        document.getElementById("formSuccess").innerText = "";
    }
    else if (!email.match(emailPattern)) {
        document.getElementById("formError").innerText = "Please enter a valid email address!";
        document.getElementById("formSuccess").innerText = "";
    }
    else {
        document.getElementById("formError").innerText = "";
        document.getElementById("formSuccess").innerText = "Form submitted successfully!";
        document.getElementById("contactForm").reset();

    }
});
