document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const totalItems = carouselItems.length;
    let currentIndex = 0;
  
    function showSlide(index) {
      if (index < 0) {
        index = totalItems - 1;
      } else if (index >= totalItems) {
        index = 0;
      }
  
      carouselContainer.style.transform = `translateX(-${index * 86}%)`;
      currentIndex = index;
    }
  
    prevBtn.addEventListener("click", function() {
      showSlide(currentIndex - 1);
    });
  
    nextBtn.addEventListener("click", function() {
      showSlide(currentIndex + 1);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    fetch('review.json')
        .then(response => response.json())
        .then(images => {
            const galleryContainer = document.querySelector('.carousel-container');
            images.forEach(image => {
                galleryContainer.innerHTML + `
                <div class="carousel-item">
                    <h2>${image.postion}</h2>
                    <h3 class="cyan">${image.name}</h3>
                    <p>${image.description}</p>
                  </div>
                `;
            });
        })
        .catch(error => console.error('Error loading the gallery:', error));
  });
