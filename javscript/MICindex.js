
// Remove any JavaScript that might be adding unwanted styling or classes to the hero section
// document.addEventListener('DOMContentLoaded', function() {
    // Ensuring that the hero page doesn't flash when the offcanvas menu is opened
//     const offcanvasMenu = document.querySelector('.offcanvas');
//     const heroSection = document.querySelector('.carousel');

//     offcanvasMenu.addEventListener('show.bs.offcanvas', function () {
//         heroSection.style.zIndex = '1';
//     });

//     offcanvasMenu.addEventListener('hide.bs.offcanvas', function () {
//         heroSection.style.zIndex = '1';
//     });
// });

// JavaScript for Carousel
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showNextItem() {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
}

setInterval(showNextItem, 5000); // Change item every 5 seconds

// JavaScript for typed text effect



document.addEventListener("DOMContentLoaded", function () {
var options1 = {
    strings: ["Welcome to M.I.C.C", "Connecting Churches with Instrumentalists", "Join Us Today!"],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true
};
var typed1 = new Typed("#typed1", options1);

var options2 = {
    strings: ["Find Instrumentalists for Your Church", "Enhance Worship with Skilled Musicians", "Sign Up Now!"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
};
var typed2 = new Typed("#typed2", options2);

var options3 = {
    strings: ["Grow Your Music Ministry", "Connect with Talented Musicians", "Get Started Today!"],
    typeSpeed: 50,
    backSpeed: 20,
    loop: true
};
var typed3 = new Typed("#typed3", options3);
});

// const typedText1 = "Welcome to Melodify";
// const typedText2 = "Connect with Instrumentalist";
// const typedText3 = "Enhance Your Worship Experience";
// const typedText4 = "Join Our Community Today";


// Scroll-triggered Animations

            // Countdown
const counts = {
    instrumentalists: 25,
    churches: 10,
    connections: 50,
    works: 100
};

const elements = {
    instrumentalists: document.getElementById('instrumentalists'),
    churches: document.getElementById('churches'),
    connections: document.getElementById('connections'),
    works: document.getElementById('works')
};

function startCounting(element, target) {
    let count = 0;
    const increment = target / 800; // Adjust speed by changing 200
    const interval = setInterval(() => {
        count += increment;
        element.textContent = Math.floor(count);
        if (count >= target) {
            clearInterval(interval);
            element.textContent = target;
        }
    }, 10);
}

// Set up Intersection Observer to trigger the counting when in view
const observerOptions = {
    threshold: 0.5 // 50% of the element is visible
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            startCounting(elements[id], counts[id]);
            observer.unobserve(entry.target); // Stop observing after the first count
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

Object.values(elements).forEach(element => {
    observer.observe(element);
});

// Card Carousel
        let index = 0;
const slides = document.querySelectorAll('.carddd');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    const carouselContainer = document.querySelector('.carouselll-container');
    carouselContainer.style.transform = `translateX(${-index * 300}px)`;
}

// Search functionality
  // Function to search and highlight elements based on the query
  document.querySelector('.search-bar button').addEventListener('click', function() {
    const query = document.querySelector('.search-bar input').value.toLowerCase();  // Get the input value
    const elements = document.querySelectorAll('[data-keywords]');  // Find elements with data-keywords attribute
    let found = false;  // Variable to track if the search found anything

    elements.forEach(function(element) {
        const keywords = element.getAttribute('data-keywords').toLowerCase();  // Get the keywords from the attribute
        if (keywords.includes(query)) {  // Check if the keywords include the query
            element.scrollIntoView({ behavior: 'smooth' });  // Scroll to the found element smoothly
            element.style.border = '2px solid red';  // Highlight the found section
            found = true;
            setTimeout(() => {
                element.style.border = '';  // Remove the highlight after a while
            }, 2000);
        }
    });

    if (!found) {
        alert('No results found');  // Alert if nothing was found
    }
});

    document.querySelector('.search-bar button').addEventListener('click', function() {
        const query = document.querySelector('.search-bar input').value.toLowerCase();
        const elements = document.querySelectorAll('[data-keywords]');
        let found = false;

        elements.forEach(function(element) {
            const keywords = element.getAttribute('data-keywords').toLowerCase();
            if (keywords.includes(query)) {
                element.scrollIntoView({ behavior: 'smooth' });
                element.style.border = '2px solid red';  // Highlight the found section
                found = true;
                setTimeout(() => {
                    element.style.border = '';  // Remove the highlight after a while
                }, 2000);
            }
        });

        if (!found) {
            alert('No matching results found.');
        }
    });




    document.getElementById('viewAllBtn').addEventListener('click', function() {
        var carouselContainer = document.querySelector('.carousel-container-x9x9');
        var gridContainer = document.getElementById('gridContainer');
        if (carouselContainer.style.display === 'none') {
            carouselContainer.style.display = 'block';
            gridContainer.style.display = 'none';
            this.textContent = 'View All Churches';
        } else {
            carouselContainer.style.display = 'none';
            gridContainer.style.display = 'grid';
            this.textContent = 'View All';
        }
    });
    
const textElement = document.getElementById('changingText');
const textArray = ["Our Goal", "Our Mission", "Your Bridge"," Between Churches and Instrumentalists"];
let textIndex = 0;

function changeText() {
    textElement.textContent = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}

setInterval(changeText, 2000); // Change text every 2 seconds
    // JavaScript for form submission
    document.getElementById('ask-question-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const question = document.getElementById('question').value;
        if (question) {
            alert('Thank you for your question! We will get back to you soon.');
            // Optionally, send the question to your server or handle it as needed
        } else {
            alert('Please enter a question.');
        }
    });
  
   
    // another card
    let index22 = 0;
    const slides22 = document.querySelectorAll('.indomie');
    const totalSlides22 = slides22.length;
    
    document.querySelector('.carousel-btn-right-x9x').addEventListener('click', () => {
        index22 = (index22 + 1) % totalSlides22;
        updateCarousel11();
    });
    
    document.querySelector('.carousel-btn-left-x9x').addEventListener('click', () => {
        index22 = (index22 - 1 + totalSlides22) % totalSlides22;
        updateCarousel11();
    });
    
    function updateCarousel11() {
        const carouselContainer11 = document.querySelector('.riri');
        carouselContainer11.style.transform = `translateX(${-index22 * 300}px)`;
    }
    
    
          
    // Function to search and highlight elements based on the query
    document.querySelector('.search-bar button').addEventListener('click', function() {
        const query = document.querySelector('.search-bar input').value.toLowerCase();  // Get the input value
        const elements = document.querySelectorAll('[data-keywords]');  // Find elements with data-keywords attribute
        let found = false;  // Variable to track if the search found anything

        elements.forEach(function(element) {
            const keywords = element.getAttribute('data-keywords').toLowerCase();  // Get the keywords from the attribute
            if (keywords.includes(query)) {  // Check if the keywords include the query
                element.scrollIntoView({ behavior: 'smooth' });  // Scroll to the found element smoothly
                element.style.border = '2px solid red';  // Highlight the found section
                found = true;
                setTimeout(() => {
                    element.style.border = '';  // Remove the highlight after a while
                }, 2000);
            }
        });

        if (!found) {
            alert('No results found');  // Alert if nothing was found
        }
    });
    let currentIndex1 = 0;

function movenotecell(direction) {
    const items = document.querySelectorAll('.notecell-item');
    const totalItems = items.length;
    const itemWidth = items[0].clientWidth + 20; // Add margin space
    currentIndex1 = (currentIndex1 + direction + totalItems) % totalItems;
    const offset = -currentIndex1 * itemWidth;
    document.querySelector('.notecell-inner').style.transform = `translateX(${offset}px)`;
}

// Adjust the notecell when resizing the window
window.addEventListener('resize', () => {
    const itemWidth = document.querySelector('.notecell1-item').clientWidth + 20;
    const offset = -currentIndex * itemWidth;
    document.querySelector('.notecell-inner').style.transform = `translateX(${offset}px)`;
});
    let currentIndex22 = 0;

function movenotecell1(direction) {
    const items = document.querySelectorAll('.notecell1-item');
    const totalItems = items.length;
    const itemWidth = items[0].clientWidth + 20; // Add margin space
    currentIndex22 = (currentIndex22 + direction + totalItems) % totalItems;
    const offset = -currentIndex * itemWidth;
    document.querySelector('.notecell1-inner').style.transform = `translateX(${offset}px)`;
}

// Adjust the notecell when resizing the window
window.addEventListener('resize', () => {
    const itemWidth = document.querySelector('.notecell1-item').clientWidth + 20;
    const offset = -currentIndex * itemWidth;
    document.querySelector('.notecell1-inner').style.transform = `translateX(${offset}px)`;
});

// mediaquery
document.querySelector('.search-bar button').addEventListener('click', function() {
    const query = document.querySelector('.search-bar input').value.toLowerCase();  // Get the input value
    const elements = document.querySelectorAll('[data-keywords]');  // Find elements with data-keywords attribute
    let found = false;  // Variable to track if the search found anything

    elements.forEach(function(element) {
        const keywords = element.getAttribute('data-keywords').toLowerCase();  // Get the keywords from the attribute
        if (keywords.includes(query)) {  // Check if the keywords include the query
            element.scrollIntoView({ behavior: 'smooth' });  // Scroll to the found element smoothly
            element.style.border = '2px solid red';  // Highlight the found section
            found = true;
            setTimeout(() => {
                element.style.border = '';  // Remove the highlight after a while
            }, 2000);
        }
    });

    if (!found) {
        alert('No results found');  // Alert if nothing was found
    }
});
let currentIndex12 = 0;

function movenotecell(direction) {
const items = document.querySelectorAll('.notecell-item');
const totalItems = items.length;
const itemWidth = items[0].clientWidth + 20; // Add margin space
currentIndex12 = (currentIndex12 + direction + totalItems) % totalItems;
const offset = -currentIndex1 * itemWidth;
document.querySelector('.notecell-inner').style.transform = `translateX(${offset}px)`;
}

// Adjust the notecell when resizing the window
window.addEventListener('resize', () => {
const itemWidth = document.querySelector('.notecell1-item').clientWidth + 20;
const offset = -currentIndex * itemWidth;
document.querySelector('.notecell-inner').style.transform = `translateX(${offset}px)`;
});
let currentIndex33 = 0;
function movenotecell1(direction) {
const items = document.querySelectorAll('.notecell1-item');
const totalItems = items.length;
const itemWidth = items[0].clientWidth + 20; // Add margin space
currentIndex33 = (currentIndex33 + direction + totalItems) % totalItems;
const offset = -currentIndex33 * itemWidth;
document.querySelector('.notecell1-inner').style.transform = `translateX(${offset}px)`;
}

// Adjust the notecell when resizing the window
window.addEventListener('resize', () => {
const itemWidth = document.querySelector('.notecell1-item').clientWidth + 20;
const offset = -currentIndex33 * itemWidth;
document.querySelector('.notecell1-inner').style.transform = `translateX(${offset}px)`;
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Increment the slideIndex and reset if it exceeds the number of slides
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    }

    // Display the current slide
    slides[slideIndex-1].style.display = "block";  

    // Change slide every 4 seconds
    setTimeout(showSlides, 4000); 
}
