const images = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.dots span');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentIndex = 0;

function updateSlider() {
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    prev.classList.toggle('hidden', currentIndex === 0);
    next.classList.toggle('hidden', currentIndex === images.length - 1);
}

next.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateSlider();
    });
});

updateSlider();

updateSlider();