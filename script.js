// Sample card data (replace with your actual data)
const cardsData = [
    {
        id: 1,
        title: "OratoAI: AI-Powered Presentation Evaluator",
        image: "https://placehold.co/600x400/111/gold?text=OratoAI",
        lastViewed: "4 days ago",
    },
    {
        id: 2,
        title: "Active Listening: The Key to Team Success",
        image: "https://placehold.co/600x400/f55/fff?text=Active+Listening",
        lastViewed: "1 month ago",
    },
    {
        id: 3,
        title: "Data Types: Colorful Cast of Coding",
        image: "https://placehold.co/600x400/003/6cf?text=Data+Types",
        lastViewed: "5 months ago",
    },
    {
        id: 4,
        title: "Mean Value Theorem",
        image: "https://placehold.co/600x400/fff/111?text=Mean+Value",
        lastViewed: "5 months ago",
    },
];

// Function to create a card element
function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.title}" class="card-image">
        <div class="card-content">
            <h2 class="card-title">${card.title}</h2>
            <p class="card-last-viewed">Last viewed: ${card.lastViewed}</p>
        </div>
    `;
    return cardElement;
}

// Function to render cards
function renderCards() {
    const cardsGrid = document.getElementById('cardsGrid');
    cardsGrid.innerHTML = ''; // Clear existing cards
    cardsData.forEach(card => {
        const cardElement = createCard(card);
        cardsGrid.appendChild(cardElement);
    });
}

// User Profile Data
const user = {
    avatar: "۞", // Replace with image URL or text
    name: "SOVEREIGN",
    plan: "Owner",
};

// Update user profile
const userAvatar = document.getElementById("user-avatar");
const userName = document.getElementById("user-name");
const userPlan = document.getElementById("user-plan");

userAvatar.textContent = user.avatar;
userName.textContent = user.name;
userPlan.textContent = user.plan;

// Popup Logic
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupClose = document.querySelector(".popup-close");
const sidebarItems = document.querySelectorAll(".sidebar-item[data-popup='true']");

// Show popup
function showPopup() {
    popup.style.display = "block";
}

// Hide popup
function hidePopup() {
    popup.style.display = "none";
}

// Event listeners for sidebar items
sidebarItems.forEach(item => {
    item.addEventListener("click", showPopup);
});

// Event listener for close button
popupClose.addEventListener("click", hidePopup);

// Event listener for clicking outside the popup
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        hidePopup();
    }
});

// Presentation Form Logic (Now handled in create_presentation.js)
const createNewButton = document.getElementById('createNewButton');

createNewButton.addEventListener('click', () => {
    window.location.href = 'create_presentation.html';
});

// Initialize lucide icons and render cards on load
lucide.createIcons();
renderCards();
