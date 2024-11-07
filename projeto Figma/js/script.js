// Function to rotate the image and display its proper description
function toggleText(element) {
    const allCards = document.querySelectorAll('.image-container');
    allCards.forEach(card => {
        if (card !== element) {
            card.classList.remove('flipped');
        }
    });
    element.classList.toggle('flipped');
}