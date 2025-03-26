document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let errorMessage = document.getElementById('error-message');

    errorMessage.textContent = ""; // Clear previous errors

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!name) {
        errorMessage.textContent = "Please enter your name.";
        return;
    }

    if (!email || !emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (!message) {
        errorMessage.textContent = "Please enter your message.";
        return;
    }

    try {
        let response = await fetch("http://localhost:5000/send-message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        let result = await response.json();
        
        if (response.ok) {
            alert("Message sent successfully!");
            document.getElementById('contact-form').reset();
        } else {
            errorMessage.textContent = result.error || "Failed to send message!";
        }
    } catch (error) {
        errorMessage.textContent = "Server error! Please try again later.";
    }
});
