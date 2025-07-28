function showForm(formId) {
    const form = document.getElementById(formId);
    form.style.display = form.style.display === "none" ? "block" : "none";
}

function showOtherInput(value) {
    const otherInput = document.getElementById("otherType");
    if (value === "Other") {
        otherInput.style.display = "block";
    } else {
        otherInput.style.display = "none";
    }
}

function redirectToHome() {
    window.location.href = "index.html";
}