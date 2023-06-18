let arrRight = document.querySelectorAll('.arrRight');
let arrLeft = document.querySelectorAll('.arrLeft');

let secondTestimonial = document.querySelector('.secondTestimonial');
let firstTestimonial = document.querySelector('.firstTestimonial');



arrRight.forEach(right => {
    right.addEventListener('click', function (e) {
        
        e.preventDefault();

        firstTestimonial.style.display = 'flex';
        secondTestimonial.style.display = 'none';
    });
});

arrLeft.forEach(left => {
    left.addEventListener('click', function (e) {
        
        e.preventDefault();

        firstTestimonial.style.display = 'none';
        secondTestimonial.style.display = 'flex';
    });
});
