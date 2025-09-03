// ==============================
// Back to Top Button
// ==============================
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==============================
// Typing Effect (Home Section)
// ==============================
const typingText = document.querySelector('.typing-text');
const text = "DARK HOWL";
let index = 0;
function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 200);
    }
}
type();

// ==============================
// Copy Codes Functionality
// ==============================
const copyButtons = document.querySelectorAll('.copy-btn');
copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const code = btn.dataset.code;
        navigator.clipboard.writeText(code).then(() => {
            btn.innerHTML = '<i class="fas fa-check"></i>'; // show check mark
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-copy"></i>'; // revert back
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    });
});

// ==============================
// FAQ Toggle Functionality
// ==============================
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
        const answer = item.querySelector('.faq-answer');
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});

// ==============================
// Hamburger Menu Toggle
// ==============================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});








document.getElementById("year").textContent = new Date().getFullYear();

















// Select all video cards and modal elements
const videoCards = document.querySelectorAll('.video-card');
const modal = document.getElementById('video-modal');
const videoFrame = document.getElementById('video-frame');
const closeModal = document.getElementById('close-modal');

// Function to open modal and play video
videoCards.forEach(card => {
    card.addEventListener('click', () => {
        const videoURL = card.getAttribute('data-video');
        videoFrame.src = videoURL; // load video in iframe
        modal.classList.add('active'); // show modal
    });
});

// Function to close modal and stop video
closeModal.addEventListener('click', () => {
    videoFrame.src = ''; // stop video
    modal.classList.remove('active'); // hide modal
});

// Optional: Close modal when clicking outside video
modal.addEventListener('click', e => {
    if(e.target === modal){
        videoFrame.src = '';
        modal.classList.remove('active');
    }
});
