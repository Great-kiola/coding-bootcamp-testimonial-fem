let arrRight = document.querySelector('.arrRight');
let arrLeft = document.querySelector('.arrLeft');

let secondTestimonial = document.querySelector('.secondTestimonial');
let firstTestimonial = document.querySelector('.firstTestimonial');

arrRight.forEach(right => {
    right.addEventListener('click', function (e) {
        
        e.preventDefault();

        firstTestimonial.style.display = 'flex';
        secondTestimonial.style.display = 'none';
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

arrLeft.addEventListener('click', function(e){
    e.preventDefault();

    firstTestimonial.style.display = 'none';
    secondTestimonial.style.display = 'flex';
});