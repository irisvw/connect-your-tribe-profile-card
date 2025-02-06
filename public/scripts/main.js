let sections = document.querySelectorAll('section');

sections.forEach(section => section.addEventListener('click', () => {
    toggle(event);
}));

function toggle(event) {
    let targetSection = event.currentTarget;

    if (!targetSection.classList.contains('active')) {
        let currentActiveSection = document.querySelector('section.active');

        currentActiveSection.classList.remove('active');
        targetSection.classList.add('active');
    }
}