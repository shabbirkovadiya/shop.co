
  var swiper = new Swiper(".CustomerSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true, // Enables loop
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".pre-btn",
    },
  });


  // Select all elements with the class "count"
  const counters = document.querySelectorAll('.count');

  counters.forEach((counter) => {
    // Initialize the counter value to 0
    counter.innerText = '0';
  
    // Define the counting function
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target'); // Get the target value
      const current = +counter.innerText.replace(/[^\d]/g, ''); // Remove non-numeric characters
      const increment = Math.ceil(target / 200); // Increment step (adjust divisor for speed)
  
      const timePerUpdate = target > 10000 ? 20 : target > 1000 ? 10 : 5; // Adjust speed based on value size
  
      if (current < target) {
        counter.innerText = Math.min(Math.ceil(current + increment), target) + '+'; // Increment with '+' sign
        setTimeout(updateCounter, timePerUpdate); // Adjust speed dynamically
      } else {
        counter.innerText = target + '+'; // Ensure it ends at the target value
      }
    };
  
    updateCounter(); // Start the counting effect
  });
  
// Function to show a popup with the category name
// Function to show a popup with the category name
function showPopup(categoryName) {
  alert(categoryName + ' is coming soon');
}

// Add event listeners for each div using their ID
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('casual-categories').addEventListener('click', function() {
    window.location.href = 'category.html';
  });

  document.getElementById('formal-categories').addEventListener('click', function() {
    showPopup('Formal');
  });

  document.getElementById('party-categories').addEventListener('click', function() {
    showPopup('Party');
  });

  document.getElementById('gym-categories').addEventListener('click', function() {
    showPopup('Gym');
  });
});


// color selection 

document.querySelectorAll('.color-option').forEach(option => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
  });
});

// size selection 

document.querySelectorAll('.size-option').forEach(option => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
  });
});

// sproduct redirection from card 
const cards = document.querySelectorAll('.arrivals-img');
cards.forEach(card => {
    card.addEventListener('click', () => {
        const productId = card.getAttribute('data-id'); // Get card-specific ID
        window.location.href = `sproduct.html?id=${productId}`; // Redirect with query parameter
    });
});