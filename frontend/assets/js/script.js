document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio Loaded');
});
fetch("http://localhost:5000/send-message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        name: "Srinivasan C",
        email: "centuriannivas@gmail.com",
        message: "hi"
    }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
