// Ensure the user is logged in before accessing the Rooms page
// document.addEventListener("DOMContentLoaded", checkAuthentication);


document.addEventListener("DOMContentLoaded", () => {
    const rooms = [
        {
            name: "Single Room",
            description: "A cozy single room with a comfortable bed and study table.",
            price: "₹5000 per month",
            image: "https://via.placeholder.com/300x200?text=Single+Room"
        },
        {
            name: "Double Room",
            description: "Spacious double room with twin beds and shared amenities.",
            price: "₹7000 per month",
            image: "https://via.placeholder.com/300x200?text=Double+Room"
        },
        {
            name: "Deluxe Room",
            description: "Luxury room with premium facilities and personal washroom.",
            price: "₹10000 per month",
            image: "https://via.placeholder.com/300x200?text=Deluxe+Room"
        },
        {
            name: "Suite Room",
            description: "A premium suite for a comfortable and royal stay.",
            price: "₹15000 per month",
            image: "https://via.placeholder.com/300x200?text=Suite+Room"
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
    // Redirects to the main index page
    window.location.href = "/code/index.html"; // Replace with the actual path of your index page
}
