/* ----------------------------------------- */
/* ----- Keyboard Accessibility Focus ------ */
/* ----------------------------------------- */
const handleFirstTab = (e) => { 
    if(e.key === 'Tab') { 
        document.body.classList.add('user-is-tabbing'); 
        window.removeEventListener('keydown', handleFirstTab); 
        window.addEventListener('mousedown', handleMouseDownOnce); 
    } 
}; 

const handleMouseDownOnce = () => { 
    document.body.classList.remove('user-is-tabbing'); 
    window.removeEventListener('mousedown', handleMouseDownOnce); 
    window.addEventListener('keydown', handleFirstTab); 
}; 

window.addEventListener('keydown', handleFirstTab); 

/* ----------------------------------------- */
/* ------- Back to Top Button Logic -------- */
/* ----------------------------------------- */
const backToTopButton = document.querySelector(".back-to-top"); 

let alterStyles = (isBackToTopRendered) => { 
    if (!backToTopButton) return; 
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden"; 
    backToTopButton.style.opacity = isBackToTopRendered ? "1" : "0"; 
    backToTopButton.style.transform = isBackToTopRendered ? "scale(1)" : "scale(0)"; 
}; 

window.addEventListener("scroll", () => { 
    if (window.scrollY > 700) { 
        alterStyles(true); 
    } else { 
        alterStyles(false); 
    } 
}); 

/* ----------------------------------------- */ 
/* --- CSS Modal Trailer Audio Kill-Switch -- */ 
/* ----------------------------------------- */ 
window.addEventListener('hashchange', () => {
    const iframe = document.querySelector('#watchTrailer iframe');
    if (iframe) {
        if (window.location.hash !== '#watchTrailer') {
            const currentSrc = iframe.src;
            iframe.src = '';         
            iframe.src = currentSrc;   
        }
    }
});
