// Predefined username and password for authentication
const validUsername = "user123";
const validPassword = "password123";

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Check credentials
    if (username === validUsername && password === validPassword) {
        // Store login state in localStorage
        localStorage.setItem("isAuthenticated", "true");
        alert("Login successful!");
        window.location.href = "room.html"; // Redirect to Rooms page
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});

// Check authentication status on other pages
function checkAuthentication() {
    if (localStorage.getItem("isAuthenticated") !== "true") {
        alert("You need to log in first!");
        window.location.href = "login.html"; // Redirect to Login page
    }
}
