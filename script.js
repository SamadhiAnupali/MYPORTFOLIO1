/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scroll section active link */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon and navbar when click navbar link (scroll)  */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* scroll reveal */
ScrollReveal({ 
    //reset: true,
    distance: '80px', 
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading ', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 
    'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* typed js */
const typed = new Typed('.multiple-text',{
    strings: ['UI/UX Designer' , 'Flyer Designer', 'Frontend Developer' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'images/Samadhi Jayasinghe UI UX.pdf'; // Replace with your CV file path
    link.download = 'Samadhi_Anupali_CV.pdf'; // Specify the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Serialize form data
        const formData = new FormData(contactForm);

        // Send form data using fetch/Ajax
        fetch('contact.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                // Handle success, show a success message, reset form, etc.
                console.log('Message Sent');
                contactForm.reset(); // Reset the form
            } else {
                // Handle errors
                console.error('Message not sent');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
$(document).ready(function () {
    $(".tab-links a").click(function (e) {
        e.preventDefault(); // Prevents the default anchor behavior
        
        $(".tab-links a").removeClass("active");
        $(this).addClass("active");
        
        var selectedFilter = $(this).data("filter");
        
        $(".portfolio-box").hide();
        if (selectedFilter === "all") {
            $(".portfolio-box").show();
        } else {
            $(".portfolio-box[data-filter='" + selectedFilter + "']").show();
        }
    });
});






