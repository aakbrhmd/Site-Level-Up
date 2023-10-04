let portfolioImages = document.querySelectorAll('.portfolioImagesWrapper img');
let previousImage = 0;
function changeImage() {
    if (window.innerWidth < 768) {
        portfolioImages[previousImage].style.display = 'none';
        nextImage = (previousImage + 1) % 5;
        portfolioImages[nextImage].style.display = 'block';
        previousImage = (previousImage + 1) % 5;
    } else if (window.innerWidth < 1024) {
        portfolioImages[previousImage].style.display = 'none';
        nextImage = (previousImage + 2) % 5;
        portfolioImages[nextImage].style.display = 'block';
        previousImage = (previousImage + 1) % 5;
    } else {
        portfolioImages[previousImage].style.display = 'none';
        nextImage = (previousImage + 3) % 5;
        portfolioImages[nextImage].style.display = 'block';
        previousImage = (previousImage + 1) % 5;
    }

}

setInterval(changeImage, 4000);