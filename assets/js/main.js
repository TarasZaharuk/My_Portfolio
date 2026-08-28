/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__link[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass?.classList.add('active-link')
        }else{
            sectionsClass?.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== PROJECT CAROUSEL ====================*/
const initProjectCarousel = () => {
    const projectItems = document.querySelectorAll('.project-item')
    
    projectItems.forEach(item => {
        const imagesContainer = item.querySelector('.project-item__images')
        const images = item.querySelectorAll('.project-item__img')
        const prevBtn = item.querySelector('.project-item__nav--prev')
        const nextBtn = item.querySelector('.project-item__nav--next')
        
        let currentIndex = 0
        
        const updateCarousel = () => {
            const offset = -currentIndex * 100
            imagesContainer.style.transform = `translateX(${offset}%)`
        }
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length
            updateCarousel()
        })
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length
            updateCarousel()
        })
    })
}

document.addEventListener('DOMContentLoaded', initProjectCarousel)

/*==================== LANGUAGE SWITCHER ====================*/
const translations = {
    en: {
        pageTitle: 'Portfolio website',
        navHome: 'Home',
        navAbout: 'About',
        navSkills: 'Skills',
        navWork: 'Work',
        homeTitle: 'Hello,<br>I\'am <span class="home__title-color">Taras</span><br> Web Developer',
        homeButton: 'Get Resume',
        aboutTitle: 'About',
        aboutSubtitle: 'I\'am Taras',
        aboutText1: '.NET Software Engineer with around 2 years of experience developing web applications using C#/.NET and Blazor. I write clean, well-structured code with a solid grasp of modern software architectures and design patterns, and bring hands-on experience with software deployment, Docker and CI/CD. Reliable team player. ',
        aboutText2: 'If your company is looking for not just a coder, but a dedicated Software Engineer who values quality and takes personal initiative, I would be glad to contribute.',
        skillsTitle: 'Skills',
        skillsSubtitle: 'Professional Skills',
        skillsText: '',
        badgeUnitTesting: 'Unit Testing',
        workTitle: 'Work',
        project1: '<a href="https://learnit.victoriousplant-5d5f846b.westeurope.azurecontainerapps.io" class="project-item__link" target="_blank">DevConnect</a> is a web platform built for developers, tutors, and students who want to connect, collaborate, and solve coding challenges together.',
        project2: 'A team project where I developed the backend side and API for a fitness club website, including an integrated SRM-system for managing members, schedules, and trainers.',
        project3: 'A tool that uses Git change tracking to generate complete and secure SQL migrations, designed for large solutions and projects working with ADO.NET or Dapper. Through this project I sharpened my T-SQL and Git skills.',
        project4: 'A tool used by fire organizations to handle their accounting needs, exporting results as Excel files via the ClosedXML library. Through this project I gained practical experience with WPF/XAML.',
        project5: 'A desktop application developed for a furniture company to automate their documentation. I worked on the tax document generation process.'
    },
    de: {
        pageTitle: 'Portfolio-Website',
        navHome: 'Home',
        navAbout: 'Über mich',
        navSkills: 'Kenntnisse',
        navWork: 'Projekte',
        homeTitle: 'Hallo,<br>ich bin <span class="home__title-color">Taras</span><br> Web Developer',
        homeButton: 'Lebenslauf',
        aboutTitle: 'Über mich',
        aboutSubtitle: 'Ich bin Taras',
        aboutText1: '.NET Software Engineer mit rund 2 Jahren Erfahrung in der Entwicklung von Webanwendungen mit C#/.NET und Blazor. Ich schreibe sauberen, gut strukturierten Code, habe ein fundiertes Verständnis für moderne Softwarearchitekturen und Design Patterns und bringe praktische Erfahrung mit Software-Deployment, Docker und CI/CD mit. Zuverlässiger Teamplayer. ',
        aboutText2: 'Wenn Ihr Unternehmen nicht nur einen Programmierer sucht, sondern einen engagierten Software Engineer, der Wert auf Qualität legt und Eigeninitiative zeigt, würde ich mich gerne einbringen.',
        skillsTitle: 'Kenntnisse',
        skillsSubtitle: 'Fachliche Kenntnisse',
        skillsText: '',
        badgeUnitTesting: 'Unit-Tests',
        workTitle: 'Projekte',
        project1: '<a href="https://learnit.victoriousplant-5d5f846b.westeurope.azurecontainerapps.io" class="project-item__link" target="_blank">DevConnect</a> ist eine Webplattform für Entwickler, Tutoren und Studierende, die sich vernetzen, zusammenarbeiten und gemeinsam Programmieraufgaben lösen möchten.',
        project2: 'Ein Teamprojekt, in dem ich das Backend und die API für die Website eines Fitnessclubs entwickelt habe – inklusive eines integrierten SRM-Systems zur Verwaltung von Mitgliedern, Kursplänen und Trainern.',
        project3: 'Ein Tool, das die Git-Änderungsverfolgung nutzt, um vollständige und sichere SQL-Migrationen zu erzeugen – konzipiert für große Solutions und Projekte mit ADO.NET oder Dapper. In diesem Projekt habe ich meine T-SQL- und Git-Kenntnisse vertieft.',
        project4: 'Ein Tool für Feuerwehrorganisationen zur Abwicklung ihrer Buchhaltung, das die Ergebnisse über die ClosedXML-Bibliothek als Excel-Dateien exportiert. In diesem Projekt habe ich praktische Erfahrung mit WPF/XAML gesammelt.',
        project5: 'Eine Desktop-Anwendung für ein Möbelunternehmen zur Automatisierung der Dokumentation. Ich habe an der Generierung der Steuerdokumente gearbeitet.'
    }
}

const langButtons = document.querySelectorAll('.nav__lang-btn')

const setLanguage = (lang) => {
    const dictionary = translations[lang] || translations.en

    document.documentElement.lang = lang

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const text = dictionary[element.dataset.i18n]
        if(text !== undefined){
            element.innerHTML = text
        }
    })

    langButtons.forEach(button => {
        const isActive = button.dataset.lang === lang
        button.classList.toggle('active-lang', isActive)
        button.setAttribute('aria-pressed', isActive)
    })

    try{
        localStorage.setItem('lang', lang)
    }catch(e){ /* storage unavailable */ }
}

langButtons.forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang))
})

let savedLang = null
try{
    savedLang = localStorage.getItem('lang')
}catch(e){ /* storage unavailable */ }

setLanguage(translations[savedLang] ? savedLang : 'en')

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.project-item',{interval: 200}); 
