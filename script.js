/* =========================================================
   CARTEL GANGWAR
   WEBSITE SCRIPT
   ========================================================= */


/* =========================
   CONFIG
   ========================= */

const CONFIG = {

    discordUrl:
        "https://discord.gg/wUdVQgkJX",

    /*
        OPEN JE 15.10.2026.

        Pošto nije određeno tačno vreme,
        countdown ide do početka tog datuma.
    */

    openDate:
        "2026-10-15T00:00:00"

};


/* =========================
   ELEMENTS
   ========================= */

const navbar =
    document.getElementById("navbar");

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.querySelector(".nav-links");

const countdown =
    document.getElementById("countdown");

const year =
    document.getElementById("year");


/* =========================
   YEAR
   ========================= */

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================
   NAVBAR SCROLL
   ========================= */

window.addEventListener(
    "scroll",
    () => {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }
);


/* =========================
   MOBILE MENU
   ========================= */

if (menuButton && navLinks) {

    menuButton.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "mobile-open"
            );

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "mobile-open"
                    );

                }
            );

        });

}


/* =========================
   COUNTDOWN
   ========================= */

function updateCountdown() {

    const target =
        new Date(CONFIG.openDate).getTime();

    const now =
        new Date().getTime();

    const difference =
        target - now;


    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    if (difference <= 0) {

        if (daysElement)
            daysElement.textContent = "00";

        if (hoursElement)
            hoursElement.textContent = "00";

        if (minutesElement)
            minutesElement.textContent = "00";

        if (secondsElement)
            secondsElement.textContent = "00";


        const label =
            document.querySelector(".countdown-label");

        if (label) {

            label.textContent =
                "SERVER JE OTVOREN";

        }

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    if (daysElement) {

        daysElement.textContent =
            String(days).padStart(2, "0");

    }


    if (hoursElement) {

        hoursElement.textContent =
            String(hours).padStart(2, "0");

    }


    if (minutesElement) {

        minutesElement.textContent =
            String(minutes).padStart(2, "0");

    }


    if (secondsElement) {

        secondsElement.textContent =
            String(seconds).padStart(2, "0");

    }

}


/* Pokreni odmah */
updateCountdown();


/* Ažuriraj svake sekunde */
setInterval(
    updateCountdown,
    1000
);


/* =========================
   DISCORD LINKS
   ========================= */

document
    .querySelectorAll(
        'a[href*="discord.gg"]'
    )
    .forEach(link => {

        link.href =
            CONFIG.discordUrl;

    });


/* =========================
   SIMPLE REVEAL ANIMATION
   ========================= */

const revealElements =
    document.querySelectorAll(
        ".system-card, .team-card, .gallery-card, .server-card"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================
   MOUSE PARALLAX
   ========================= */

const heroShapes =
    document.querySelectorAll(
        ".hero-shape"
    );


window.addEventListener(
    "mousemove",
    event => {

        if (window.innerWidth < 900)
            return;


        const x =
            (event.clientX /
            window.innerWidth) -
            0.5;


        const y =
            (event.clientY /
            window.innerHeight) -
            0.5;


        heroShapes.forEach(
            (shape, index) => {

                const strength =
                    index === 0
                        ? 18
                        : 10;


                shape.style.transform =
                    `
                    rotate(45deg)
                    translate(
                        ${x * strength}px,
                        ${y * strength}px
                    )
                    `;

            }
        );

    }
);


/* =========================
   CONSOLE
   ========================= */

console.log(
    "%c CARTEL GANGWAR ",
    "background:#8b5cf6;color:white;font-size:18px;font-weight:bold;padding:8px 15px;"
);

console.log(
    "%c RULE THE STREETS. ",
    "color:#a78bfa;font-size:14px;font-weight:bold;"
);

console.log(
    "Open: 15.10.2026."
);

console.log(
    "Discord: " + CONFIG.discordUrl
);