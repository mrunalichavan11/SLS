const swiper = new Swiper(".clientsSwiper",{

    slidesPerView:4,

    spaceBetween:20,

    loop:true,

    speed:700,

    allowTouchMove:true

});

document.querySelector(".nextBtn").addEventListener("click",()=>{

    swiper.slideNext();

});

document.querySelector(".prevBtn").addEventListener("click",()=>{

    swiper.slidePrev();

});



const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

menuBtn.onclick = function(){

    sideMenu.classList.add("active");
    overlay.classList.add("active");

}

closeBtn.onclick = closeMenu;
overlay.onclick = closeMenu;

function closeMenu(){

    sideMenu.classList.remove("active");
    overlay.classList.remove("active");

}

// Close menu after clicking any link

document.querySelectorAll(".side-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        closeMenu();

    });

});



const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

// Observe all gallery images
document.querySelectorAll(".gallery-row img").forEach((img, index) => {

    img.style.transitionDelay = `${index * 0.15}s`; // Staggered animation

    observer.observe(img);

});

// Observe the button
document.querySelectorAll(".gallery-btn").forEach(btn => {

    observer.observe(btn);

});

const serviceHeading = document.querySelector(".animate-left");

const headingObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            headingObserver.unobserve(entry.target); // Run only once
        }

    });

}, {
    threshold: 0.3
});

headingObserver.observe(serviceHeading);

const aboutObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            document.querySelector(".about-image").classList.add("show");

            setTimeout(() => {
                document.querySelector(".about-content").classList.add("show");
            }, 200); // Slight delay

            aboutObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.3
});

aboutObserver.observe(document.querySelector(".about-section"));

const equipmentCards = document.querySelectorAll(".equipment-card");

const equipmentObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            equipmentCards.forEach((card, index) => {

                setTimeout(() => {
                    card.classList.add("show");
                }, index * 180); // 180ms delay between cards

            });

            equipmentObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.2
});

// Observe the first card (or the equipment section if you have one)
equipmentObserver.observe(document.querySelector(".equipment-grid"));

