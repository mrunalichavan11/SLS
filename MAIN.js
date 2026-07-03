const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

menuBtn.onclick = function(){

    mobileMenu.classList.add("active");
    overlay.classList.add("active");

}

closeBtn.onclick = closeMenu;
overlay.onclick = closeMenu;

function closeMenu(){

    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");

}

new Swiper(".clientSwiper",{

    loop:true,

    autoplay:{
        delay:1000,
        disableOnInteraction:false,
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },

    spaceBetween:20,

    breakpoints:{

        0:{
            slidesPerView:1
        },

        768:{
            slidesPerView:2
        },

        1024:{
            slidesPerView:4
        }

    }

});

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;

            const update = () => {

                count += speed;

                if(count < target){

                    counter.innerText = Math.ceil(count) + "+";

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => observer.observe(counter));


window.addEventListener("load", () => {

    setTimeout(() => {
        document.querySelector(".hero-content h2").classList.add("show");
    }, 50);

    setTimeout(() => {
        document.querySelector(".hero-content h1").classList.add("show");
    }, 180);

    setTimeout(() => {
        document.querySelector(".hero-btn").classList.add("show");
    }, 300);

});


const servicesObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            servicesObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.3
});

servicesObserver.observe(document.querySelector(".services-heading"));



const designerObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.querySelector(".designer-left").classList.add("show");
            entry.target.querySelector(".designer-right").classList.add("show");

            designerObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.3
});

designerObserver.observe(document.querySelector(".designer-section"));

const lightDeskObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            lightDeskObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.3
});

lightDeskObserver.observe(document.querySelector(".lightdesk-heading"));


const clientHeading = document.querySelector(".clients-heading");

const clientObserver = new IntersectionObserver((entries)=>{

    if(entries[0].isIntersecting){

        const letters = document.querySelectorAll(".clients-heading h2 span");

        letters.forEach((letter,index)=>{

            setTimeout(()=>{

                letter.style.opacity = "1";

            }, index * 120);

        });

        clientObserver.disconnect();

    }

},{
    threshold:0.4
});

clientObserver.observe(clientHeading);