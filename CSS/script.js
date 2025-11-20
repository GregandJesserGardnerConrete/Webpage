// Gallery Carousel JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Array of gallery images (excluding logo)
    const galleryImages = [
        'images/curvedstairway.01.jpeg',
        'images/driveway.01.jpeg',
        'images/driveway.02.jpeg',
        'images/drivewaysidewalk.01.jpeg',
        'images/extension.01.jpeg',
        'images/extension.02.jpeg',
        'images/extension.03.jpeg',
        'images/extension.04.jpeg',
        'images/extension.05.jpeg',
        'images/extension.06.jpeg',
        'images/extension.07.jpeg',
        'images/garageslab.01.jpeg',
        'images/garageslabopen.01.jpeg',
        'images/garageslabopen.02.jpeg',
        'images/patio.01.jpeg',
        'images/patio.02.jpeg',
        'images/patio.03.jpeg',
        'images/patio.04.jpeg',
        'images/patio.05.jpeg',
        'images/patio.06.jpeg',
        'images/patio.07.jpeg',
        'images/patio.08.jpeg',
        'images/patio.09.jpeg',
        'images/patio.10.jpeg',
        'images/patio.11.jpeg',
        'images/patio.12.jpeg',
        'images/patio.13.jpeg',
        'images/patioclose.02.jpeg',
        'images/patioclose.jpeg',
        'images/patioextension.jpeg',
        'images/patiosidewalk.02.jpeg',
        'images/patiosidewalk.jpeg',
        'images/shelteredpatio.01.jpeg',
        'images/sidewalk.01.jpeg',
        'images/sidewalk.02.jpeg',
        'images/sidewalk.03.jpeg',
        'images/steps.01.jpeg',
        'images/steps.02.jpeg',
        'images/steps.03.jpeg',
        'images/steps.04.jpeg',
        'images/steps.05.jpeg',
        'images/stepspatio.jpeg',
        'images/stepssidewalk.01.jpeg',
        'images/stylizedsidewalk.01.jpeg'
    ];

    let currentImageIndex = 0;

    const carouselImage = document.getElementById('carouselImage');
    const currentImageNum = document.getElementById('currentImageNum');
    const totalImages = document.getElementById('totalImages');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Set total images count
    totalImages.textContent = galleryImages.length;

    // Initialize with first image
    function loadImage(index) {
        if (index < 0) {
            currentImageIndex = galleryImages.length - 1;
        } else if (index >= galleryImages.length) {
            currentImageIndex = 0;
        } else {
            currentImageIndex = index;
        }
        
        carouselImage.src = galleryImages[currentImageIndex];
        currentImageNum.textContent = currentImageIndex + 1;
    }

    // Next image
    function nextImage() {
        loadImage(currentImageIndex + 1);
    }

    // Previous image
    function prevImage() {
        loadImage(currentImageIndex - 1);
    }

    // Event listeners for buttons
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            nextImage();
        } else if (event.key === 'ArrowLeft') {
            prevImage();
        }
    });

    // Load first image
    loadImage(0);
});
