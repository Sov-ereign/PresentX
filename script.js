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

    const imageElement = document.createElement('img');
    imageElement.src = card.image;
    imageElement.alt = card.title;
    imageElement.classList.add('card-image');

    const contentElement = document.createElement('div');
    contentElement.classList.add('card-content');

    const titleElement = document.createElement('h2');
    titleElement.classList.add('card-title');
    titleElement.textContent = card.title;

    const lastViewedElement = document.createElement('p');
    lastViewedElement.classList.add('card-last-viewed');
    lastViewedElement.textContent = `Last viewed: ${card.lastViewed}`;

    contentElement.appendChild(titleElement);
    contentElement.appendChild(lastViewedElement);
    cardElement.appendChild(imageElement);
    cardElement.appendChild(contentElement);

    return cardElement;
}

// Function to render cards
function renderCards() {
    const cardsGrid = document.querySelector('.cards-grid');
    cardsData.forEach(card => {
        const cardElement = createCard(card);
        cardsGrid.appendChild(cardElement);
    });
}

// Render cards on page load
renderCards();

// Initialize lucide icons
lucide.createIcons();

// User Profile Data (replace with actual user data)
const user = {
    avatar: "S", // You can replace this with an image URL later
    name: "THE GREAT SOVEREIGN",
    plan: "FREE",
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
