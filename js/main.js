/*
=========================================
CLIENT CONFIGURATION
Change these values for each new client.
=========================================
*/

const businessConfig = {
    name: "Your Electric Company",

    phone: "(555) 555-0123",

    phoneRaw: "15555550123",

    city: "Your City",

    state: "Your State",

    country: "United States",

    email: "hello@yourbusiness.com",

    smsMessage:
        "Hi, I found your website and I'd like to request a quote for electrical work.",
};


/* =========================================
   BUSINESS DATA
========================================= */

const callLinks =
    document.querySelectorAll("[data-call]");

const smsLinks =
    document.querySelectorAll("[data-sms]");

const emailLinks =
    document.querySelectorAll("[data-email]");

const phoneElements =
    document.querySelectorAll("[data-phone-text]");

const businessNameElements =
    document.querySelectorAll("[data-business-name]");

const cityElements =
    document.querySelectorAll("[data-city]");


callLinks.forEach((link) => {

    link.href =
        `tel:+${businessConfig.phoneRaw}`;

});


smsLinks.forEach((link) => {

    const message =
        encodeURIComponent(
            businessConfig.smsMessage
        );

    link.href =
        `sms:+${businessConfig.phoneRaw}?body=${message}`;

});


emailLinks.forEach((link) => {

    link.href =
        `mailto:${businessConfig.email}`;

    link.textContent =
        businessConfig.email;

});


phoneElements.forEach((element) => {

    element.textContent =
        businessConfig.phone;

});


businessNameElements.forEach((element) => {

    element.textContent =
        businessConfig.name;

});


cityElements.forEach((element) => {

    element.textContent =
        businessConfig.city;

});


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const nav =
    document.querySelector(".nav");

const navLinks =
    document.querySelectorAll(".nav__list a");


function closeMenu() {

    nav.classList.remove(
        "nav--open"
    );

    menuToggle.classList.remove(
        "menu-toggle--active"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open menu"
    );

    document.body.classList.remove(
        "menu-open"
    );

}


function openMenu() {

    nav.classList.add(
        "nav--open"
    );

    menuToggle.classList.add(
        "menu-toggle--active"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Close menu"
    );

    document.body.classList.add(
        "menu-open"
    );

}


menuToggle.addEventListener(
    "click",
    () => {

        const isOpen =
            nav.classList.contains(
                "nav--open"
            );

        if (isOpen) {

            closeMenu();

        } else {

            openMenu();

        }

    }
);


navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        closeMenu
    );

});


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            nav.classList.contains(
                "nav--open"
            )
        ) {

            closeMenu();

            menuToggle.focus();

        }

    }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15,
        }

    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================
   HEADER SCROLL STATE
========================================= */

const siteHeader =
    document.querySelector(
        ".site-header"
    );


function updateHeaderOnScroll() {

    if (
        window.scrollY > 40
    ) {

        siteHeader.classList.add(
            "site-header--scrolled"
        );

    } else {

        siteHeader.classList.remove(
            "site-header--scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateHeaderOnScroll
);


updateHeaderOnScroll();