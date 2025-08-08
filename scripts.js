const translations = {
    es: {
        nav: {
            'sobre-mi': 'Sobre mí',
            'experiencia': 'Experiencia',
            'proyectos': 'Proyectos',
            'mision-vision': 'Misión y Visión',
            'contacto': 'Contacto',
            'langBtn': 'ES'
        },
        sobreMi: {
            title: 'Sobre mí',
            text: `Ingeniero en Desarrollo de Software con más de 4 años de experiencia en soporte técnico en el Sistema Educativo Saint Clare. Durante este tiempo, he desarrollado habilidades sólidas en redes, servidores (locales y en la nube), sistemas de telefonía, cámaras y soporte de primer nivel en equipos como impresoras, parlantes y conexiones de red. También he brindado soporte técnico en entornos audiovisuales, incluyendo sistemas de sonido para eventos y transmisiones en vivo.
      
Actualmente curso una pasantía como ingeniero en desarrollo de software en Moody’s, donde aplico tecnologías como C#, .NET y Kafka, fortaleciendo mis habilidades en programación backend y desarrollo de soluciones empresariales. Me caracteriza un enfoque autodidacta, orientado a la mejora continua y a la resolución efectiva de problemas técnicos.`
        },
        experiencia: {
            title: 'Experiencia',
            text: 'Agregar experiencia laboral.'
        },
        proyectos: {
            title: 'Proyectos',
            ruralAnimal: {
                title: 'RuralAnimal',
                text: 'Sistema web llamado Rural Animal, creado para necesidades Agropecuarias, los usuarios pueden ofertar o subastar sus animales, visualizar en 3D, reservar citas por medio de un chat con IA.',
                repo: 'Ver repositorio'
            }
        },
        misionVision: {
            title: 'Misión y Visión',
            mision: {
                title: 'Misión',
                text: 'Diseñar y desarrollar soluciones tecnológicas que combinen lógica, creatividad e innovación, creando sistemas robustos que respondan a los desafíos reales de manera eficiente y original. Mi propósito es generar valor a través del pensamiento técnico y la imaginación aplicada.'
            },
            vision: {
                title: 'Visión',
                text: 'Ser un profesional referente en el desarrollo de software backend, reconocido por fusionar la tecnología con la creatividad para construir soluciones innovadoras, escalables y funcionales que transformen la forma en que las personas interactúan con los sistemas.'
            }
        },
        contacto: {
            title: 'Contacto',
            nombre: 'Nombre',
            correo: 'Correo electrónico',
            mensaje: 'Mensaje',
            enviar: 'Enviar'
        },
        footer: {
            github: 'GitHub',
            linkedin: 'LinkedIn',
            copyright: '© 2025 Ronald Picado'
        }
    },
    en: {
        nav: {
            'sobre-mi': 'About Me',
            'experiencia': 'Experience',
            'proyectos': 'Projects',
            'mision-vision': 'Mission and Vision',
            'contacto': 'Contact',
            'langBtn': 'EN'
        },
        sobreMi: {
            title: 'About Me',
            text: `Software Development Engineer with over 4 years of experience in technical support at the Saint Clare Educational System. During this time, I have developed strong skills in networks, servers (both on-premises and cloud), telephony systems, cameras, and first-level support for devices such as printers, speakers, and network connections. I have also provided technical support in audiovisual environments, including sound systems for events and live broadcasts.
      
I am currently doing a software engineering internship at Moody’s, where I work with technologies like C#, .NET, and Kafka, strengthening my skills in backend programming and enterprise solution development. I am characterized by a self-taught mindset, continuous improvement focus, and effective technical problem-solving.`
        },
        experiencia: {
            title: 'Experience',
            text: 'Add work experience.'
        },
        proyectos: {
            title: 'Projects',
            ruralAnimal: {
                title: 'RuralAnimal',
                text: 'Web system called Rural Animal, created for agricultural needs. Users can sell or auction their animals, view them in 3D, and book appointments through an AI-powered chat.',
                repo: 'View repository'
            }
        },
        misionVision: {
            title: 'Mission and Vision',
            mision: {
                title: 'Mission',
                text: 'Design and develop technological solutions that combine logic, creativity, and innovation, building robust systems that address real-world challenges efficiently and originally. My purpose is to generate value through technical thinking and applied imagination.'
            },
            vision: {
                title: 'Vision',
                text: 'To be a leading backend software development professional, recognized for merging technology and creativity to build innovative, scalable, and functional solutions that transform the way people interact with systems.'
            }
        },
        contacto: {
            title: 'Contact',
            nombre: 'Name',
            correo: 'Email',
            mensaje: 'Message',
            enviar: 'Send'
        },
        footer: {
            github: 'GitHub',
            linkedin: 'LinkedIn',
            copyright: '© 2025 Ronald Picado'
        }
    }
};

function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const card = carousel.querySelector('div');
    const cardWidth = card.offsetWidth + 24; // + gap between cards (24px)
    carousel.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

let currentIndex = 0;

function updateCarousel() {
    const cards = document.querySelectorAll('.carousel-card');
    const total = cards.length;

    cards.forEach((card, index) => {
        const offset = index - currentIndex;

        // Reset styles first
        card.style.transition = 'all 0.7s ease';
        card.style.position = 'absolute';

        // Active card
        if (offset === 0) {
            card.style.zIndex = 10;
            card.style.opacity = 1;
            card.style.transform = 'translateX(0) scale(1)';
        }
        // Left card
        else if (offset === -1 || (currentIndex === 0 && index === total - 1)) {
            card.style.zIndex = 5;
            card.style.opacity = 0.5;
            card.style.transform = 'translateX(-300px) scale(0.85)';
        }
        // Right card
        else if (offset === 1 || (currentIndex === total - 1 && index === 0)) {
            card.style.zIndex = 5;
            card.style.opacity = 0.5;
            card.style.transform = 'translateX(300px) scale(0.85)';
        }
        // Hidden cards (not visible in carousel of 3)
        else {
            card.style.opacity = 0;
            card.style.transform = 'scale(0)';
            card.style.zIndex = 1;
        }
    });
}

function changeSlide(direction) {
    const cards = document.querySelectorAll('.carousel-card');
    const total = cards.length;
    currentIndex = (currentIndex + direction + total) % total;
    updateCarousel();
}

window.onload = updateCarousel;



let currentLang = localStorage.getItem("lang") || 'es';

function switchLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem("lang", currentLang);
    applyTranslations();
}

function applyTranslations() {
    const t = translations[currentLang];

    // Navigation
    document.querySelectorAll('nav a').forEach(a => {
        const href = a.getAttribute('href').replace('#', '');
        if (t.nav[href]) a.innerText = t.nav[href];
    });
    document.getElementById('lang-btn').innerText = t.nav.langBtn;

    // Sobre mí
    document.querySelector('#sobre-mi h1').innerText = t.sobreMi.title;
    document.querySelector('#sobre-mi p').innerHTML = t.sobreMi.text;

    // Experiencia
    document.querySelector('#experiencia h2').innerText = t.experiencia.title;
    document.querySelector('#experiencia p').innerText = t.experiencia.text;

    // Proyectos
    document.querySelector('#proyectos h2').innerText = t.proyectos.title;
    document.querySelector('#proyectos h3').innerText = t.proyectos.ruralAnimal.title;
    document.querySelector('#proyectos p').innerText = t.proyectos.ruralAnimal.text;
    document.querySelector('#proyectos a').innerText = t.proyectos.ruralAnimal.repo;

    // Misión y Visión
    document.querySelector('#mision-vision h2').innerText = t.misionVision.title;
    document.querySelector('#mision-vision h3').innerText = t.misionVision.mision.title;
    document.querySelector('#mision-vision .mb-4 p').innerText = t.misionVision.mision.text;
    document.querySelector('#mision-vision div:last-child h3').innerText = t.misionVision.vision.title;
    document.querySelector('#mision-vision div:last-child p').innerText = t.misionVision.vision.text;

    // Contacto
    document.querySelector('#contacto h2').innerText = t.contacto.title;
    const inputs = document.querySelectorAll('#contacto input, #contacto textarea');
    inputs[0].placeholder = t.contacto.nombre;
    inputs[1].placeholder = t.contacto.correo;
    inputs[2].placeholder = t.contacto.mensaje;
    document.querySelector('#contacto button').innerText = t.contacto.enviar;

    // Footer
    const footerLinks = document.querySelectorAll('footer a span');
    footerLinks[0].innerText = t.footer.github;
    footerLinks[1].innerText = t.footer.linkedin;
    document.querySelector('footer p').innerText = t.footer.copyright;
}

document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();
});
