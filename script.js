/* ==========================================
   MIAN AHMAD DAWOOD LAW FIRM
   JAVASCRIPT
========================================== */


/* ==========================================
   PAGE LOADER
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
            document.getElementById("loader");

        loader.classList.add("hide");

    }, 900);

});


/* ==========================================
   NAVIGATION
========================================== */

const navbar =
    document.getElementById("navbar");

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


document.querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
    document.querySelectorAll(".stat-item strong");

let counterStarted = false;


function startCounters() {

    if (counterStarted) return;


    const stats =
        document.querySelector(".stats");


    if (!stats) return;


    const position =
        stats.getBoundingClientRect().top;


    if (position <
        window.innerHeight - 100) {


        counterStarted = true;


        counters.forEach(counter => {

            const target =
                Number(
                    counter.getAttribute("data-target")
                );


            let current = 0;


            const increment =
                Math.max(
                    1,
                    Math.ceil(target / 80)
                );


            const timer =
                setInterval(() => {

                    current += increment;


                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }


                    counter.textContent =
                        current;

                }, 25);

        });

    }

}


window.addEventListener(
    "scroll",
    startCounters
);

startCounters();


/* ==========================================
   TESTIMONIAL SLIDER
========================================== */

const testimonials =
    document.querySelectorAll(
        ".testimonial"
    );


const next =
    document.getElementById("next");


const prev =
    document.getElementById("prev");


let currentSlide = 0;


function showSlide(index) {

    testimonials.forEach(
        item => {

            item.classList.remove(
                "active"
            );

        }
    );


    testimonials[index]
        .classList.add("active");

}


next.addEventListener("click", () => {

    currentSlide++;

    if (
        currentSlide >=
        testimonials.length
    ) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

});


prev.addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide =
            testimonials.length - 1;

    }

    showSlide(currentSlide);

});


/* Automatic slider */

setInterval(() => {

    currentSlide++;

    if (
        currentSlide >=
        testimonials.length
    ) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}, 6000);


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const phone =
            document.getElementById(
                "phone"
            ).value.trim();


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (
            !name ||
            !email ||
            !phone ||
            !message
        ) {

            formMessage.textContent =
                "Please complete all required fields.";

            return;

        }


        formMessage.textContent =
            "Thank you. Your consultation request has been received.";


        contactForm.reset();

    }
);


/* ==========================================
   BACK TO TOP
========================================== */

const backTop =
    document.getElementById(
        "backTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(
        ".service-card, .about-content, .about-visual, .why-content, .why-visual, .contact-form-box"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


function revealOnScroll() {

    revealElements.forEach(
        element => {

            const position =
                element.getBoundingClientRect().top;


            if (
                position <
                window.innerHeight - 80
            ) {

                element.classList.add(
                    "visible"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ==========================================
   CURRENT YEAR
========================================== */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();


/* ==========================================
   SUBTLE MOUSE PARALLAX
========================================== */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


document.addEventListener(
    "mousemove",
    (event) => {

        if (!heroVisual) return;


        const x =
            (window.innerWidth / 2 -
                event.clientX) / 80;


        const y =
            (window.innerHeight / 2 -
                event.clientY) / 80;


        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);
