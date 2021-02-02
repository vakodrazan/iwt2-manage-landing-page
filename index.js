const slideshow = document.querySelector('.slideshow');
const sliderLinks = document.querySelectorAll('.slider__link');


function displaySlide({ target }) {
    const index = target.dataset.index;

    const active = document.querySelector('.slider__link.active');
    const oldIndex = active.dataset.index;

    if (index !== oldIndex) {
        active.classList.remove('active');
        target.classList.add('active');

        const activeTestimonial = slideshow.children[index];
        const hiddenTestimonial = slideshow.children[oldIndex];
        
        activeTestimonial.style.display = 'block';
        hiddenTestimonial.style.display = 'none';
    }
}


sliderLinks.forEach((slider) => slider.addEventListener('click', displaySlide));