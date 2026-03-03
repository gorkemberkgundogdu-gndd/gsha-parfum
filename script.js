// 1. Sayfa Kaydırma Efekti (Scroll Reveal)
// Elemanlar ekrana girdikçe görünür hale gelir
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Animasyon uygulanacak elemanları seçiyoruz
document.querySelectorAll('.note-box, .showcase-img, .showcase-text').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// 2. Akordeon Kontrolü
// Bir bölüm açıldığında diğerinin kapanmasını sağlar (Opsiyonel ama şıktır)
const details = document.querySelectorAll("details");

details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});

// 3. WhatsApp Butonu İçin Küçük Bir Tıklama Takibi (Opsiyonel)
document.querySelector('.btn-outline')?.addEventListener('click', () => {
    console.log("WhatsApp yönlendirmesi başlatıldı.");
});