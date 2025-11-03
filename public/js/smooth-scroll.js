// Otomatik yumuşak kayma - URL değişmeden
document.addEventListener('DOMContentLoaded', function() {
    // Sayfa tam yüklenene kadar bekle
    setTimeout(function() {
        const scrollBtn = document.querySelector('.scroll-down');
        
        if (scrollBtn) {
            scrollBtn.addEventListener('click', function(e) {
                e.preventDefault(); // Link davranışını tamamen engelle
                
                // Sayfanın en altına kay
                const documentHeight = document.documentElement.scrollHeight;
                const windowHeight = window.innerHeight;
                const targetY = documentHeight - windowHeight; // Sayfanın en altı
                
                // Yumuşak kayma animasyonu - okuma hızında
                smoothScrollTo(targetY, 40000); // 15 saniye sürede yavaşça
            });
        }
    }, 500);
});

// Manual smooth scroll function
function smoothScrollTo(targetY, duration) {
    const startY = window.pageYOffset;
    const diff = targetY - startY;
    const startTime = performance.now();
    
    function step() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const ease = 1 - Math.pow(1 - progress, 3);
        
        window.scrollTo(0, startY + (diff * ease));
        
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    
    requestAnimationFrame(step);
}
