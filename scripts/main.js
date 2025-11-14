document.addEventListener('DOMContentLoaded', function() {
const menuToggler = document.querySelector('.menu-toggler');
const nav = document.querySelector('.nav');

// Check if elements exist before adding event listeners
if (menuToggler && nav) {
    menuToggler.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggler.classList.toggle('active');
        
        // Change icon based on menu state
        const icon = menuToggler.querySelector('i');
        if (icon) {
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // Close menu when clicking on a nav link (mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 1024) {
                nav.classList.remove('active');
                menuToggler.classList.remove('active');
                const icon = menuToggler.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
    
    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(event) {
        if (window.innerWidth < 768 && 
            nav.classList.contains('active') && 
            !nav.contains(event.target) && 
            !menuToggler.contains(event.target)) {
            nav.classList.remove('active');
            menuToggler.classList.remove('active');
            const icon = menuToggler.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
} else {
    console.error('Menu toggler or nav element not found');
}

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggler.classList.remove('active');
        const icon = menuToggler.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
});


// Single Open Accordion for FAQ
document.querySelectorAll('.single-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.faq-icon');
        
        // Close all other items first
        document.querySelectorAll('.single-content').forEach(otherContent => {
            if (otherContent !== content) {
                otherContent.classList.add('hidden');
                const otherIcon = otherContent.previousElementSibling.querySelector('.faq-icon');
                otherIcon.classList.remove('active');
                otherIcon.classList.remove('fa-times');
                otherIcon.classList.add('fa-plus');
            }
        });
        
        // Toggle current item
        content.classList.toggle('hidden');
        
        // Toggle icon for current item
        if (content.classList.contains('hidden')) {
            icon.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-plus');
        } else {
            icon.classList.add('active');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-times');
        }
    });
});
});

// Get the button:
let mybutton = document.getElementById("scrollTopBtn");

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}