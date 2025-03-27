const presentationForm = document.getElementById('presentationForm');
const slidesContainer = document.getElementById('slidesContainer');
const addSlideButton = document.getElementById('addSlide');

// Function to add a new slide
function addSlide() {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.innerHTML = `
        <label>Slide Title:</label>
        <input type="text" class="slideTitle"><br>
        <ul class="bulletPoints">
            <li><input type="text" class="bulletPoint"></li>
        </ul>
        <button type="button" class="addBulletPoint">Add Bullet Point</button>
        <button type="button" class="removeSlide">Remove Slide</button>
    `;
    slidesContainer.appendChild(slide);

    // Add event listeners for adding and removing bullet points and slides
    slide.querySelector('.addBulletPoint').addEventListener('click', addBulletPoint);
    slide.querySelector('.removeSlide').addEventListener('click', removeSlide);
}

// Function to add a bullet point
function addBulletPoint(event) {
    const ul = event.target.previousElementSibling;
    const li = document.createElement('li');
    li.innerHTML = '<input type="text" class="bulletPoint">';
    ul.appendChild(li);
}

// Function to remove a slide
function removeSlide(event) {
    slidesContainer.removeChild(event.target.parentElement);
}

// Handle form submission
presentationForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const slidesData = [];
    const slides = slidesContainer.querySelectorAll('.slide');
    slides.forEach(slide => {
        const slideTitle = slide.querySelector('.slideTitle').value;
        const bulletPoints = Array.from(slide.querySelectorAll('.bulletPoint')).map(input => input.value);
        slidesData.push({ title: slideTitle, bullet_points: bulletPoints });
    });

    const data = { title: title, slides: slidesData };

    try {
        const response = await fetch('/generate_ppt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const json = await response.json();
            console.log(json.message);
            alert("Presentation generated successfully!");
        } else {
            const json = await response.json();
            console.error(json.error);
            alert("Error generating presentation. Please check the console for details.");
        }
    } catch (error) {
        console.error('Error:', error);
        alert("An unexpected error occurred. Please try again later.");
    }
});

addSlideButton.addEventListener('click', addSlide);
