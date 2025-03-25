document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("emailError").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required!";
        isValid = false;
    }

    if (message.length < 5) {
        document.getElementById("messageError").textContent = "The message must contain at least 5 characters!";
        isValid = false;
    }

    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "The phone number must start with +380 and contain 12 digits!";
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Incorrect email!";
        isValid = false;
    }

    if (isValid) {
        console.log("Name:", name);
        console.log("Message:", message);
        console.log("Phone:", phone);
        console.log("Email:", email);
        alert("Form submitted successfully!");
    }
});