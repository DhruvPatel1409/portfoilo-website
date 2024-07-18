document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const img = project.querySelector('img');
        const details = project.querySelector('.project-details');

        img.addEventListener('click', function() {
            details.classList.toggle('active');
        });
    });
});

function toggleProjectDetails(project) {
    // Toggle the active class on project-details
    var projectDetails = project.querySelector('.project-details');
    projectDetails.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;

    // Check for previously saved dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        // Save dark mode preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});

