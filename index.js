/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

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
/* ------- Project Trailer Lightbox -------- */
/* ----------------------------------------- */
const trailerModal = document.getElementById('trailerModal');
const openTrailerBtn = document.getElementById('openTrailerBtn');
const closeTrailerBtn = document.getElementById('closeTrailerBtn');
const modalVideoFrame = document.getElementById('modalVideoFrame');

// Trailer URL
const youtubeEmbedUrl = "https://www.youtube.com/embed/ptTOkNQs6W4?si=DLygMpXl6pRLfdSU";

if (openTrailerBtn && trailerModal && modalVideoFrame) {
    // Open Overlay Window Event
    openTrailerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalVideoFrame.src = youtubeEmbedUrl;
        trailerModal.style.visibility = "visible";
        trailerModal.style.opacity = "1";
    });

    // Close Overlay Window Function
    const closeModal = () => {
        trailerModal.style.opacity = "0";
        trailerModal.style.visibility = "hidden";
        modalVideoFrame.src = ""; // Strips source code to instantly halt audio track
    };

    if (closeTrailerBtn) closeTrailerBtn.addEventListener('click', closeModal);
    
    // Close overlay if background element workspace is clicked
    trailerModal.addEventListener('click', (e) => {
        if (e.target === trailerModal) closeModal();
    });
}
