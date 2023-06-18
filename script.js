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


// arrRight.addEventListener('click', function(e){
//     // e.preventDefault();

//     // alert('You have clicked on me!');

//     // if (firstTestimonial.style.display === 'none'){
//     //     secondTestimonial.style.display = 'none';
//     // } else {
//     //     alert('You have clicked on me!');
//     // }

// });

// arrLeft.addEventListener('click', function(e){
//     e.preventDefault();

//     firstTestimonial.style.display = 'none';
//     secondTestimonial.style.display = 'flex';
// });