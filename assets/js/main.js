let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;

        // Wrap around if index is out of bounds
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        // Set the transform property to slide
        const offset = -currentSlide * 100;
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }

    function moveSlide(direction) {
        showSlide(currentSlide + direction);
    }

    // Initialize the carousel with the first slide visible
    showSlide(currentSlide);




/*
function filterItems(category) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}*/
function filterItems(category, element) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    const dropdownLinks = document.querySelectorAll('.dropdown-opt a');
    dropdownLinks.forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    element.classList.add('active');
}
function filterItem(category, button) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    // Get all buttons within the category-buttons div
    const buttons = document.querySelectorAll('.category-buttons button');

    // Remove the 'active' class (or any custom color styling) from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add the 'active' class to the clicked button
    button.classList.add('active');

    // Now you can add your filtering logic here (based on the category parameter)
    console.log("Filtering items by category: " + category);
}


// Toggle the dropdown content with sliding effect
function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdown-content');
    if (dropdownContent.style.maxHeight) {
        dropdownContent.style.maxHeight = null;
    } else {
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
    }
}