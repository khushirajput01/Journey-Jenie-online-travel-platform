// 1. Smooth Scroll to Section (Menu Click)
function show(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 2. Scroll Reveal & Reset Logic (ISME HI ASLI ANTAR HAI)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom;
        var elementVisible = 150; 

        // AGAR SECTION SCREEN KE ANDAR HAI
        if (elementTop < windowHeight - elementVisible && elementBottom > 50) {
            reveals[i].classList.add("active");
        } 
        // AGAR SECTION SCREEN SE BAHAR CHALA GAYA (Reset karne ke liye)
        else {
            reveals[i].classList.remove("active");
        }
    }
}

// Scroll aur Load dono par chalna chahiye
window.addEventListener("scroll", reveal);
window.onload = () => {
    setTimeout(reveal, 100);
};