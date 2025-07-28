// Ensure the user is logged in before accessing the Rooms page
// document.addEventListener("DOMContentLoaded", checkAuthentication);


document.addEventListener("DOMContentLoaded", () => {
    const rooms = [
        {
            name: "Single Room",
            description: "A cozy single room with a comfortable bed and study table.",
            price: "₹5000 per month",
            image: "https://media.designcafe.com/wp-content/uploads/2022/07/01130654/all-in-one-study-table-with-bookshelf-in-bedroom.jpg"
        },
        {
            name: "Double Room",
            description: "Spacious double room with twin beds and shared amenities.",
            price: "₹7000 per month",
            image: "https://roomraccoon.com/wp-content/uploads/2024/06/2-1.png"
        },
        {
            name: "Deluxe Room",
            description: "Luxury room with premium facilities and personal washroom.",
            price: "₹10000 per month",
            image: "https://www.hotelsonarbangla.com/wp-content/uploads/2024/03/Deluxe-room-ground-floor-2.webp"
        },
        {
            name: "Suite Room",
            description: "A premium suite for a comfortable and royal stay.",
            price: "₹15000 per month",
            image: "https://gos3.ibcdn.com/c4a80158-e0a9-4b1d-8ef4-7850972cd7ba.jpg"
        }
    ];

    const roomList = document.getElementById("room-list");

    // Dynamically create room cards
    rooms.forEach(room => {
        const roomCard = document.createElement("div");
        roomCard.classList.add("room-card");

        roomCard.innerHTML = `
            <div class="room-image">
                <img src="${room.image}" alt="${room.name}">
            </div>
            <div class="room-info">
                <h3>${room.name}</h3>
                <p>${room.description}</p>
                <p class="price">${room.price}</p>
                <button onclick="alert('Booking functionality coming soon!')">Book Now</button>
            </div>
        `;

        roomList.appendChild(roomCard);
    });
});

function navigateToIndex() {
    window.location.href = "/index.html";
}
