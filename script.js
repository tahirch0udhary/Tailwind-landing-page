function handleMenu() {
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-button');
    const navDialog = document.getElementById('nav-dialog');

    if (navDialog.classList.contains('hidden')) {
        navDialog.classList.remove('hidden');
        menuButton.classList.add('hidden');
        closeButton.classList.remove('hidden');
    } else {
        navDialog.classList.add('hidden');
        menuButton.classList.remove('hidden');
        closeButton.classList.add('hidden');
    }
}


const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setupIntersectionObserver(element, isLTR, speed) {
   
    const intersectionCallback = (entries) => {
        const intersecting = entries[0].isIntersecting;
        if (intersecting) {
            document.addEventListener('scroll', scrollHandler)
            console.log("intersecting")
        } else {
            document.removeEventListener('scroll', scrollHandler)
            console.log("not intersecting")
        }
    }

    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);

    function scrollHandler() {
        
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        
        let total_translate = 0;
        if (isLTR) {
            total_translate = translateX + initialTranslateLTR;
        } else {
            total_translate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${total_translate}px)`
        console.log(element)
   }
}

const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");
const line4 = document.getElementById("line-4");

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.3);

const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = element.querySelector('i'); // Changed to querySelector

        if (ddElement) {
            ddElement.classList.toggle('hidden');
        }

        if (ddArrowIcon) {
            ddArrowIcon.classList.toggle('-rotate-180');
        }
    });
});
