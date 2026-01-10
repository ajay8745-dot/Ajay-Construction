// Slider ko automatic chalane ka code
document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#homeSlider');
    
    // Bootstrap carousel ko active karna
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000, // Har 3 second mein slide badlegi
        ride: 'carousel',
        wrap: true
    });
});

//--------------------------------------------------------------------------------------------
let images = ["img/slide1.jpg", "img/slide2.jpg", "img/slide3.jpg", "img/slide4.jpg", "img/slide5.jpg"];
let currentIndex = 0;
let isAnimating = false;

function nextSlide() {
    if (isAnimating) return;
    isAnimating = true;

    const front = document.getElementById('frontImg');
    const back = document.getElementById('backImg');

    // पर्दा ऊपर उठाओ
    front.classList.add('curtain-up');

    setTimeout(() => {
        // इंडेक्स बदलो
        currentIndex = (currentIndex + 1) % images.length;
        let nextIndex = (currentIndex + 1) % images.length;

        // इमेजेस अपडेट करो
        front.src = images[currentIndex];
        back.src = images[nextIndex];

        // पर्दा वापस नीचे लाओ बिना एनीमेशन के
        front.style.transition = "none";
        front.classList.remove('curtain-up');
        
        setTimeout(() => {
            // एनीमेशन दोबारा ऑन करो
            front.style.transition = "clip-path 1.2s cubic-bezier(0.645, 0.045, 0.355, 1)";
            isAnimating = false;
        }, 50);
        
    }, 1200); // 1.2 सेकंड का वेट
}

// ऑटोमैटिक चलाना (हर 5 सेकंड)
let autoSlide = setInterval(nextSlide, 5000);

// क्लिक करने पर
function manualNext() {
    clearInterval(autoSlide);
    nextSlide();
    autoSlide = setInterval(nextSlide, 5000);
}