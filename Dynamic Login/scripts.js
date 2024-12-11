const openModal = document.getElementById("openLoginModal");
const closeModal = document.getElementById("closeLoginModal");
const modal = document.getElementById("loginModal");

// Open the modal
openModal.addEventListener("click", () => {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
});

// Close the modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

// Close modal when clicking outside of content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});
