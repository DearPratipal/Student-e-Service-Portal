// Select elements
const openHostelFormBtn = document.getElementById("openHostelForm");
const hostelFormModal = document.getElementById("hostelFormModal");
const closeHostelFormBtn = document.getElementById("closeHostelForm");
const complaintTypeSelect = document.getElementById("complaintType");
const otherComplaintTypeContainer = document.getElementById("otherComplaintTypeContainer");

// Open modal
openHostelFormBtn.addEventListener("click", () => {
    hostelFormModal.style.display = "flex";
});

// Close modal
closeHostelFormBtn.addEventListener("click", () => {
    hostelFormModal.style.display = "none";
});

// Close modal when clicking outside the content
hostelFormModal.addEventListener("click", (e) => {
    if (e.target === hostelFormModal) {
        hostelFormModal.style.display = "none";
    }
});

// Show/hide "Other" input based on complaint type
complaintTypeSelect.addEventListener("change", () => {
    if (complaintTypeSelect.value === "other") {
        otherComplaintTypeContainer.style.display = "block";
    } else {
        otherComplaintTypeContainer.style.display = "none";
    }
});
