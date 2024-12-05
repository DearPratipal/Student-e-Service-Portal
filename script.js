function login() {
    // alert("Login functionality coming soon!");
    window.open("http://127.0.0.1:5500/code/LoginCode/index.html?#");
}

function register() {
    alert("Register functionality coming soon!");
}

document.addEventListener("DOMContentLoaded", function () {
    // Fetch announcement from database or API
    const defaultMessage =
        "This project is developed and designed By @Dear Pratipal & Shubham Kumar from Branch of BCA 3rd 'G'. All rights are reserved by © MM(DU) student's.";

    // Simulate fetching from a database
    const announcementElement = document.getElementById("announcement");
    const fetchedMessage = ""; // Replace this with actual data from an API or database
    
    announcementElement.textContent = fetchedMessage || defaultMessage;
});

