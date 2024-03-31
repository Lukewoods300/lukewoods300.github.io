// Typewriter effect for profile title
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = 'Luke Woods';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.dynamic-text');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement, words, wait);
}
// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add image carousel for projects
const projectsSection = document.querySelector('.projects');
const projectsContainer = document.createElement('div');
projectsContainer.classList.add('projects-container');

const projects = [
  {
    title: '1',
    description: 'Implemented HL7 interfaces for seamless healthcare data integration.',
    image: 'GJ_rXAWXAAEv3dr.jpg'
  },
  {
    title: '2',
    description: 'Developed scripts for automated data transformation.',
    image: 'GJ_rXAYWEAAOKum.jpg'
  },
  {
    title: '3',
    description: 'Led the optimization of PACS deployment on cloud platforms.',
    image: 'GJ_rXAcXoAAkHbO.jpg'
  }
];

projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  const projectImage = document.createElement('img');
  projectImage.src = project.image;
  projectImage.alt = project.title;

  const projectDetails = document.createElement('div');
  projectDetails.classList.add('project-details');

  const projectTitle = document.createElement('h3');
  projectTitle.textContent = project.title;

  const projectDescription = document.createElement('p');
  projectDescription.textContent = project.description;

  projectDetails.appendChild(projectTitle);
  projectDetails.appendChild(projectDescription);

  projectCard.appendChild(projectImage);
  projectCard.appendChild(projectDetails);

  projectsContainer.appendChild(projectCard);
});

projectsSection.appendChild(projectsContainer);

// Add skill bars
const skillsSection = document.querySelector('.skills');
const skillsContainer = document.createElement('div');
skillsContainer.classList.add('skills-container');

const skills = [
  {
    name: 'Python',
    level: 90
  },
  {
    name: 'Java',
    level: 80
  },
  {
    name: 'PowerShell',
    level: 85
  },
  {
    name: 'AWS',
    level: 75
  },
  {
    name: 'Azure',
    level: 70
  }
];

skills.forEach(skill => {
  const skillBar = document.createElement('div');
  skillBar.classList.add('skill-bar');

  const skillName = document.createElement('div');
  skillName.classList.add('skill-name');
  skillName.textContent = skill.name;

  const skillLevel = document.createElement('div');
  skillLevel.classList.add('skill-level');
  skillLevel.style.width = `${skill.level}%`;

  skillBar.appendChild(skillName);
  skillBar.appendChild(skillLevel);

  skillsContainer.appendChild(skillBar);
});

skillsSection.appendChild(skillsContainer);

// Add this to your existing main.js file
const blogPosts = document.querySelectorAll('.blog-post');
const journalEntries = document.querySelectorAll('.journal-entry');

function setMaxHeight(elements, maxHeight) {
    elements.forEach(element => {
        element.style.maxHeight = maxHeight;
        element.style.overflow = "hidden";
    });
}

function addReadMoreButton(elements, label) {
    elements.forEach(element => {
        const button = document.createElement('button');
        button.textContent = label;
        button.addEventListener('click', () => {
        if (element.style.maxHeight) {
             element.style.maxHeight = null; // Show full text
             button.textContent = "Read Less";
        } else {
             element.style.maxHeight = "100px"; // Example initial height
             button.textContent = "Read More";
        }
        });
        element.appendChild(button);
    });
}

// Initial setup
setMaxHeight(blogPosts, "100px"); 
addReadMoreButton(blogPosts, "Read More");
setMaxHeight(journalEntries, "100px"); 
addReadMoreButton(journalEntries, "Read More");
