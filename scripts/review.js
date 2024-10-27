function updateReviewCount() {
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    
    const reviewCounterDisplay = document.getElementById('reviewCounter');
    if (reviewCounterDisplay) {
        reviewCounterDisplay.textContent = `Number of reviews completed: ${reviewCount}`;
    }
}

document.addEventListener('DOMContentLoaded', updateReviewCount);