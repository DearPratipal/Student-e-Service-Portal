// Get references to the modal and form elements
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');
const closeModal = document.getElementById('closeModal');
const formInputs = loginForm.querySelectorAll('input');
const loginError = document.getElementById('loginError');
const submit = document.getElementById('submit');
const email = document.getElementById('email');
const password = document.getElementById('password');
const remember = document.getElementById('remember');

// Function to open the login modal
function openLoginModal() {
    loginModal.style.display = 'block';
}

// Function to close the login modal
function closeLoginModal() {
    loginModal.style.display = 'none';
}

// Event listener to show the login modal when the login button is clicked
loginButton.addEventListener('click', openLoginModal);

// Event listener to close the modal when the close button is clicked
closeModal.addEventListener('click', closeLoginModal);

// Function to validate login form
function validateLoginForm(event) {
    event.preventDefault();
    
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    // Check if email and password are provided
    if (!email || !password) {
        loginError.textContent = 'Please fill in both fields.';
        return;
    }

    // Simple email format validation (can be expanded)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        loginError.textContent = 'Please enter a valid email address.';
        return;
    }

    // Simulate successful login
    if (email === 'kumarpratipal123@gmail.com' && password === 'password123') {
        alert('Login Successful! Thank You');
        localStorage.setItem('loggedIn', 'true'); // Set logged-in status in localStorage
        window.location.href = '../../code/room.html'; // Redirect to the index page after successful login
    } else {
        alert('Unsucessful Check the Details!')
        loginError.textContent = 'Invalid email or password.';
    }
}

// Event listener for login form submission
loginForm.addEventListener('submit', validateLoginForm);

// Check login status on page load
window.onload = function() {
    const loggedIn = localStorage.getItem('loggedIn');
    
    if (loggedIn === 'true') {
        // If user is logged in, allow access to the main page
        console.log('User is logged in');
    } else {
        // If user is not logged in, redirect to login page
        if (window.location.pathname !== '/login.html') {
            window.location.href = '/login.html';
        }
    }
};
