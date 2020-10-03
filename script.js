const shareBtn = document.querySelector('.share-btn');
const socialLinks = document.querySelector('.social-links');

shareBtn.addEventListener('click', () => {
    if(socialLinks.className === 'social-links') {
        socialLinks.classList.add('show');
        shareBtn.classList.add('show');
    }
    else {
        socialLinks.classList.remove('show');
        shareBtn.classList.remove('show');
    }
});