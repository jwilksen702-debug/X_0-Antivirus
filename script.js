// Smooth scroll to sections
function scrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Download program handler
function downloadProgram() {
    alert('🎉 Danke für dein Interesse an X_0 Antivirus!\n\n' +
          'Download wird vorbereitet...\n\n' +
          'Wenn der Download nicht automatisch startet,\n' +
          'kontaktiere uns unter: imfo.alex.boss@web.de');
    
    // Hier könnte später ein echter Download-Link hinzugefügt werden
    console.log('Download initiated...');
}

// Mobile menu toggle (für zukünftige Erweiterungen)
function toggleMenu() {
    const nav = document.querySelector('.nav');
    if (nav.style.display === 'none') {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
}

// Retro button click effect
document.addEventListener('DOMContentLoaded', function() {
    const retroButtons = document.querySelectorAll('.btn-retro, .btn-download, .btn-primary');
    
    retroButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retro button press effect
            this.style.transform = 'translateY(2px)';
            setTimeout(() => {
                this.style.transform = 'translateY(0)';
            }, 50);
        });
    });
});

// Scroll animation for feature boxes
window.addEventListener('scroll', function() {
    const featureBoxes = document.querySelectorAll('.feature-box, .pricing-box, .requirement-box');
    
    featureBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;
        
        if (boxTop < window.innerHeight && boxBottom > 0) {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }
    });
});

// Initial opacity for animation
document.addEventListener('DOMContentLoaded', function() {
    const featureBoxes = document.querySelectorAll('.feature-box, .pricing-box, .requirement-box');
    featureBoxes.forEach(box => {
        box.style.opacity = '0.7';
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'all 0.5s ease';
    });
});
