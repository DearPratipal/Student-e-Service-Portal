document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && email && password) {
        alert("Registration Successful!");
        // You can implement authentication logic here
        window.location.href = "index.html"; // Redirect after registration
    } else {
        alert("Please fill in all the details.");
    }
});
