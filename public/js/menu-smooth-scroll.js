// Tüm Menüler İçin Basit Anchor Scroll - Stabil
document.addEventListener('DOMContentLoaded', function() {
    
    // Sayfa tam yüklenene kadar bekle (GSAP ve diğer scriptler için)
    setTimeout(function() {
        initAnchorScroll();
    }, 500);
    
    function initAnchorScroll() {
        // Tüm anchor linklerini seç - hem normal hem mobile hem sticky menü
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', handleAnchorClick);
        });
    }
    
    function handleAnchorClick(e) {
        const targetId = this.getAttribute('href');
        
        // Eğer sadece # ise (dil değiştirici gibi), çalışma
        if (targetId === '#' || targetId === '' || !targetId) {
            return;
        }
        
        // Portfolio ve Contact linkleri için normal davranış
        if (targetId.includes('.html')) {
            return;
        }
        
        e.preventDefault();
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Sticky header yüksekliğini doğru hesapla
            const stickyHeader = document.querySelector('.header-sticky');
            const headerHeight = stickyHeader ? stickyHeader.offsetHeight : 100;
            
            // Kısa bir gecikme ile doğru pozisyonu hesapla
            setTimeout(function() {
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight - 20;
                
                // Basit smooth scroll
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100);
            
            // Mobile/Offcanvas menüyü kapat
            closeMenus();
        }
    }
    
    function closeMenus() {
        // Mobile menü kapat
        const hamburgerClose = document.querySelector('.hamburger_close_btn');
        if (hamburgerClose) {
            const hamburgerBg = document.querySelector('.hamburger_bg');
            if (hamburgerBg && (hamburgerBg.classList.contains('show') || hamburgerBg.style.opacity === '1')) {
                hamburgerClose.click();
            }
        }
    }
    
    // Aktif menü item'ı highlight et - Tüm menüler için
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        // Performance için debounce
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.pageYOffset + 250; // Header yüksekliği + offset
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    // Tüm menü item'lardan active class'ı kaldır (hem normal hem sticky)
                    document.querySelectorAll('.mainmenu li').forEach(item => {
                        item.classList.remove('current-menu-ancestor', 'active');
                    });
                    
                    // İlgili menu item'a active class ekle (tüm menülerde)
                    document.querySelectorAll(`.mainmenu a[href="#${sectionId}"]`).forEach(link => {
                        if (link && link.parentElement) {
                            link.parentElement.classList.add('current-menu-ancestor');
                        }
                    });
                }
            });
        }, 50); // 50ms debounce
    });
});
