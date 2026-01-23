document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    console.log("Buren achaallaj baina shvv");

    if (localStorage.getItem('dark-mode') === "true") {
        document.body.classList.add('dark-mode');
        console.log('Dark mode is true');
    } else {
        console.log('Dark mode is false');
    }

    toggleButton.addEventListener('click', () => {
        const assanEseh = document.body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));

        if (assanEseh) {
            console.log('Dark mode enabled');
        } else {
            console.log('Dark mode disabled');
        }

    });
});

const PASSWORD = "123";
const loginBTn = document.getElementById('login-button');
const loginSection = document.getElementById('login-section');
const adminPanel = document.getElementById('admin-panel');
const loginError = document.getElementById('login-error');

loginBTn.addEventListener('click', () => {
    const password = document.getElementById('admin-password').value;

    if (password === PASSWORD) {
        loginSection.style.display = "none";
        adminPanel.style.display = "block";
        console.log("Login successful");
    } else {
        loginError.textContent = "Incorrect password. Please try again.";
        console.log("Login failed");
    }
});

const enableEditBtn = document.getElementById('enable-edit-mode');
const saveBtn = document.getElementById('save-all');

enableEditBtn.addEventListener('click', () => {
    const about = document.getElementById('about-text');
    about.setAttribute('contenteditable', 'true');

    const project1 = document.getElementById('project-1');
    project1.setAttribute('contenteditable', 'true');
    const project2 = document.getElementById('project-2');
    project2.setAttribute('contenteditable', 'true');
    const project3 = document.getElementById('project-3');
    project3.setAttribute('contenteditable', 'true');

    saveBtn.style.display = "inline-block";
    alert("Edit mode enabled. Make your changes and click 'Save All' when done.");

    saveBtn.addEventListener('click', () => {
        const aboutText = document.getElementById('about-text').textContent.trim();
        localStorage.setItem('about-text', aboutText);

        const project1Text = document.getElementById('project-1').textContent.trim();
        localStorage.setItem('project-1', project1Text);

        const project2Text = document.getElementById('project-2').textContent.trim();
        localStorage.setItem('project-2', project2Text);

        const project3Text = document.getElementById('project-3').textContent.trim();
        localStorage.setItem('project-3', project3Text);
        alert("All changes saved.");
    });
});
// Load saved content on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedAboutText = localStorage.getItem('about-text');
    if (savedAboutText) {
        document.getElementById('about-text').textContent = savedAboutText;
    }

    const savedProject1Text = localStorage.getItem('project-1');
    if (savedProject1Text) {
        document.getElementById('project-1').textContent = savedProject1Text;
    }

    const savedProject2Text = localStorage.getItem('project-2');
    if (savedProject2Text) {
        document.getElementById('project-2').textContent = savedProject2Text;
    }

    const savedProject3Text = localStorage.getItem('project-3');
    if (savedProject3Text) {
        document.getElementById('project-3').textContent = savedProject3Text;
    }
});