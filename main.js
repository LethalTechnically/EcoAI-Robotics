// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

// Button interaction
document.getElementById("learnBtn").addEventListener("click", function(){
    document.querySelector("#technology").scrollIntoView({
        behavior: "smooth"
    });
});