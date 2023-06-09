let aboutTarget = document.querySelector(".About")
let aboutButton = document.getElementById('about-button')
let aboutHidden = true;

let projectsTarget = document.querySelector(".Projects")
let projectsButton = document.getElementById('projects-button')
let projectsHidden = true;

let skillsTarget = document.querySelector(".skills")
let skillsButton = document.getElementById('skills-button')
let skillsHidden = true;


let aboutRevealHide = function() {
    if(aboutHidden) {
        aboutTarget.style.display = 'block';
        aboutHidden = false;
        projectsTarget.style.display = 'none';
        projectsHidden = true;
        skillsTarget.style.display = 'none';
        skillsHidden = true;
    } else {
        aboutTarget.style.display = 'none';
        aboutHidden = true;
    }   

}

let projectRevealHide = function() {
    if(projectsHidden) {
        projectsTarget.style.display = 'block';
        projectsHidden = false;
        aboutTarget.style.display = 'none';
        aboutHidden = true;
        skillsTarget.style.display = 'none';
        skillsHidden = true;
        
    } else {
        projectsTarget.style.display = 'none';
        projectsHidden = true;
    }   

}

let skillsRevealHide = function() {
    if(skillsHidden) {
        skillsTarget.style.display = 'block';
        skillsHidden = false;
        projectsTarget.style.display = 'none';
        projectsHidden=true;
        aboutTarget.style.display = 'none';
        aboutHidden = true;
    } else {
        skillsTarget.style.display = 'none';
        skillsHidden = true;
    }   

}

aboutButton.addEventListener("click",aboutRevealHide)
projectsButton.addEventListener("click",projectRevealHide)
skillsButton.addEventListener("click",skillsRevealHide)