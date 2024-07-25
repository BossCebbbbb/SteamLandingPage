// Function to update the recommended games section
function updateRecommendedGames(category) {
    const recommendedGameTitle = document.getElementById("recommendedGameTitle");
    const recommendedGameImage = document.querySelector("#recommendedGameImage img");
    const additionalImages = document.getElementById("additionalImages");
    const recommendedGameDescription = document.getElementById("recommendedGameDescription");

    const games = {
        racing: {
            title: "Forza Horizon 4",
            image: "image/racinglogo.jpg",
            description: "Experience the thrill of high-speed racing with stunning visuals and dynamic gameplay.",
            additionalImages: ["image/racing-1.jpg", "image/racing-2.jpg", "image/racing-3.webp"]
        },
        shooting: {
            title: "Sniper Elite V",
            image: "image/shooting.jpg",
            description: "Join the intense action and engage in epic battles in this top-rated shooting game.",
            additionalImages: ["image/shooting1.webp", "image/shooting2.jpg", "image/shooting3.jpg"]
        },
        rpg: {
            title: "Once Human",
            image: "image/rpg1.jpg",
            description: "Embark on a magical journey in a richly detailed fantasy world with captivating storytelling.",
            additionalImages: ["image/one.jpg", "image/two.webp", "image/three.jpg"]
        },
        sports: {
            title: "All-In-One Sports VR",
            image: "image/Sports.jpg",
            description: "Get ready for the ultimate football experience with realistic gameplay and licensed teams.",
            additionalImages: ["image/sports1.jpg", "image/sports2.jpg", "image/Sports.jpg"]
        },
        strategy: {
            title: "Dota 2",
            image: "image/dota.jpg",
            description: "Build and expand your empire, outsmart your opponents, and achieve global domination.",
            additionalImages: ["image/dota4.jpg", "image/dota5.jpg", "image/dota2.png"]
        }
    };

    const selectedGame = games[category];

    if (selectedGame) {
        recommendedGameTitle.textContent = selectedGame.title;
        recommendedGameImage.src = selectedGame.image;
        recommendedGameImage.style.width = '100%';
        recommendedGameImage.style.height = 'auto'; // Adjusted for proper aspect ratio
        recommendedGameImage.style.objectFit = 'cover';
        recommendedGameDescription.textContent = selectedGame.description;

        additionalImages.innerHTML = '';
        selectedGame.additionalImages.forEach((imgSrc) => {
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            imgElement.alt = selectedGame.title;
            imgElement.className = 'rounded-lg shadow-md h-32 w-1/4 hover-scale';
            additionalImages.appendChild(imgElement);
        });
    } else {
        // Reset to default if no valid category is selected
        recommendedGameTitle.textContent = 'Dota 2';
        recommendedGameImage.src = 'image/dota2.png';
        recommendedGameImage.style.width = '100%';
        recommendedGameImage.style.height = 'auto'; // Adjusted for proper aspect ratio
        recommendedGameImage.style.objectFit = 'cover';
        recommendedGameDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum augue at orci ultricies, non tempor velit accumsan.';

        additionalImages.innerHTML = `
            <img src="image/dota2.png" alt="Game 1" class="rounded-lg shadow-md h-32 w-1/4 hover-scale">
            <img src="image/dota3.png" alt="Game 2" class="rounded-lg shadow-md h-32 w-1/4 hover-scale">
            <img src="image/dota4.jpg" alt="Game 3" class="rounded-lg shadow-md h-32 w-1/4 hover-scale">
        `;
    }
}

// Event listeners for category buttons
document.querySelectorAll(".category-button").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        
        const category = this.getAttribute("data-category");

        // Log the category to ensure it's correct
        console.log("Selected category:", category);

        // Update recommended games based on category
        updateRecommendedGames(category);

        // Filter gallery images based on category
        document.querySelectorAll(".gallery-item").forEach(item => {
            const itemCategory = item.querySelector(".gallery-image").getAttribute("data-category");
            if (category === "all" || itemCategory === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

        // Update active button
        document.querySelectorAll(".category-button").forEach(btn => {
            btn.classList.remove("active");
        });
        this.classList.add("active");
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function () {
            item.classList.toggle('active'); // Toggle the active class
            item.classList.toggle('open'); // Toggle the open class to show/hide the answer
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
    // Select all links with hash href attributes
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Get the target element's ID from the href attribute
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                const topOffset = 0; // Adjust this if you have a fixed header
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementPosition - topOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});



  // Modal functionality
  const loginButton = document.getElementById('loginButton');
  const registerButton = document.getElementById('registerButton');
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');
  const closeLoginModal = document.getElementById('closeLoginModal');
  const closeRegisterModal = document.getElementById('closeRegisterModal');

  loginButton.addEventListener('click', () => {
      loginModal.style.display = 'flex';
  });

  registerButton.addEventListener('click', () => {
      registerModal.style.display = 'flex';
  });

  closeLoginModal.addEventListener('click', () => {
      loginModal.style.display = 'none';
  });

  closeRegisterModal.addEventListener('click', () => {
      registerModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === loginModal) {
          loginModal.style.display = 'none';
      }
      if (event.target === registerModal) {
          registerModal.style.display = 'none';
      }
  });