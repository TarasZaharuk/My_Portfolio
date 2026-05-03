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
