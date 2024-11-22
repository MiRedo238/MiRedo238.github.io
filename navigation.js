
document.addEventListener('DOMContentLoaded', () => {

    const initNavigation = () => {
        document.querySelectorAll('.primary-navigation').forEach(link => {
            link.addEventListener('click', handleNavigation);
        });
    };


    const handleNavigation = (e) => {
        e.preventDefault();
        const sectionId = e.target.getAttribute('data-section');
        switchSection(sectionId);
    };

   
    const switchSection = (sectionId) => {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        
        document.getElementById(sectionId).classList.add('active');
    };

   
    initNavigation();
});