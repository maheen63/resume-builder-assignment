"use strict";
// declare const html2pdf: any;
class ResumeBuilder {
    constructor() {
        this.form = document.getElementById('resumeForm');
        this.previewSection = document.getElementById('resumePreview');
        this.downloadButton = document.getElementById('downloadResume');
        this.shareLinkSection = document.getElementById('shareLink');
        this.resumeData = this.initResumeData();
        this.initEventListeners();
        this.loadSharedResume();
    }
    initResumeData() {
        return {
            name: '',
            email: '',
            phone: '',
            location: '',
            photo: '',
            education: [],
            experience: [],
            skills: []
        };
    }
    initEventListeners() {
        var _a, _b, _c, _d;
        this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        this.downloadButton.addEventListener('click', () => this.downloadResume());
        (_a = document.getElementById('addEducation')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => this.addEducationField());
        (_b = document.getElementById('addExperience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => this.addExperienceField());
        (_c = document.getElementById('addSkill')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => this.addSkillField());
        (_d = document.getElementById('photo')) === null || _d === void 0 ? void 0 : _d.addEventListener('change', (e) => this.handlePhotoUpload(e));
        this.form.addEventListener('input', () => this.updateResumeData());
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.updateResumeData();
        this.updatePreview();
        this.generateShareLink();
    }
    updateResumeData() {
        const formData = new FormData(this.form);
        this.resumeData.name = formData.get('name');
        this.resumeData.email = formData.get('email');
        this.resumeData.phone = formData.get('phone');
        this.resumeData.location = formData.get('location');
        this.resumeData.education = this.getEducationData();
        this.resumeData.experience = this.getExperienceData();
        this.resumeData.skills = this.getSkillsData();
        this.updatePreview();
    }
    getEducationData() {
        const educationEntries = document.querySelectorAll('.education-entry');
        return Array.from(educationEntries).map(entry => ({
            school: entry.querySelector('.school').value,
            degree: entry.querySelector('.degree').value,
            graduationDate: entry.querySelector('.graduation-date').value
        }));
    }
    getExperienceData() {
        const experienceEntries = document.querySelectorAll('.experience-entry');
        return Array.from(experienceEntries).map(entry => ({
            company: entry.querySelector('.company').value,
            position: entry.querySelector('.position').value,
            startDate: entry.querySelector('.start-date').value,
            endDate: entry.querySelector('.end-date').value,
            description: entry.querySelector('.description').value
        }));
    }
    getSkillsData() {
        const skillInputs = document.querySelectorAll('.skill-input');
        return Array.from(skillInputs).map(input => input.value);
    }
    updatePreview() {
        this.previewSection.innerHTML = `
            <div class="resume-content">
                <div class="header">
                    ${this.resumeData.photo ? `<img src="${this.resumeData.photo}" alt="Profile Photo" class="profile-photo">` : ''}
                    <h1>${this.resumeData.name}</h1>
                    <p>${this.resumeData.email} | ${this.resumeData.phone} | ${this.resumeData.location}</p>
                </div>
                <div class="section">
                    <h2>Education</h2>
                    ${this.resumeData.education.map(edu => `
                        <div class="entry">
                            <h3>${edu.school}</h3>
                            <p>${edu.degree} - ${edu.graduationDate}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="section">
                    <h2>Work Experience</h2>
                    ${this.resumeData.experience.map(exp => `
                        <div class="entry">
                            <h3>${exp.position} at ${exp.company}</h3>
                            <p>${exp.startDate} - ${exp.endDate}</p>
                            <p>${exp.description}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="section">
                    <h2>Skills</h2>
                    <ul class="skills-list">
                        ${this.resumeData.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
    addEducationField() {
        var _a;
        const container = document.getElementById('educationContainer');
        const educationEntry = document.createElement('div');
        educationEntry.className = 'education-entry';
        educationEntry.innerHTML = `
            <input type="text" class="school" placeholder="School" required>
            <input type="text" class="degree" placeholder="Degree" required>
            <input type="text" class="graduation-date" placeholder="Date" required>
            <button type="button" class="remove-btn">Remove</button>
        `;
        container === null || container === void 0 ? void 0 : container.appendChild(educationEntry);
        (_a = educationEntry.querySelector('.remove-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            educationEntry.remove();
            this.updateResumeData();
        });
    }
    addExperienceField() {
        var _a;
        const container = document.getElementById('experienceContainer');
        const experienceEntry = document.createElement('div');
        experienceEntry.className = 'experience-entry';
        experienceEntry.innerHTML = `
            <input type="text" class="company" placeholder="Company" required>
            <input type="text" class="position" placeholder="Position" required>
            <input type="text" class="start-date" placeholder="Start Date" required>
            <input type="text" class="end-date" placeholder="End Date" required>
            <textarea class="description" placeholder="Job Description" required></textarea>
            <button type="button" class="remove-btn">Remove</button>
        `;
        container === null || container === void 0 ? void 0 : container.appendChild(experienceEntry);
        (_a = experienceEntry.querySelector('.remove-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            experienceEntry.remove();
            this.updateResumeData();
        });
    }
    addSkillField() {
        var _a;
        const container = document.getElementById('skillsContainer');
        const skillEntry = document.createElement('div');
        skillEntry.className = 'skill-entry';
        skillEntry.innerHTML = `
            <input type="text" class="skill-input" placeholder="Skill" required>
            <button type="button" class="remove-btn">Remove</button>
        `;
        container === null || container === void 0 ? void 0 : container.appendChild(skillEntry);
        (_a = skillEntry.querySelector('.remove-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            skillEntry.remove();
            this.updateResumeData();
        });
    }
    handlePhotoUpload(e) {
        var _a;
        const input = e.target;
        const file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                var _a;
                this.resumeData.photo = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                this.updatePreview();
            };
            reader.readAsDataURL(file);
        }
    }
    downloadResume() {
        const element = this.previewSection;
        html2pdf()
            .from(element)
            .save('resume.pdf');
    }
    generateShareLink() {
        const data = JSON.stringify(this.resumeData);
        const encodedData = encodeURIComponent(data);
        const shareLink = `${window.location.origin}${window.location.pathname}?data=${encodedData}`;
        this.shareLinkSection.innerHTML = `
            <p>Share your resume:</p>
            <input type="text" value="${shareLink}" readonly>
        `;
    }
    loadSharedResume() {
        const urlParams = new URLSearchParams(window.location.search);
        const encodedData = urlParams.get('data');
        if (encodedData) {
            try {
                const decodedData = decodeURIComponent(encodedData);
                this.resumeData = JSON.parse(decodedData);
                this.populateForm();
                this.updatePreview();
            }
            catch (error) {
                console.error('Error loading shared resume:', error);
            }
        }
    }
    populateForm() {
        document.getElementById('name').value = this.resumeData.name;
        document.getElementById('email').value = this.resumeData.email;
        document.getElementById('phone').value = this.resumeData.phone;
        document.getElementById('location').value = this.resumeData.location;
        this.resumeData.education.forEach(() => this.addEducationField());
        this.resumeData.experience.forEach(() => this.addExperienceField());
        this.resumeData.skills.forEach(() => this.addSkillField());
        const educationEntries = document.querySelectorAll('.education-entry');
        this.resumeData.education.forEach((edu, index) => {
            const entry = educationEntries[index];
            entry.querySelector('.school').value = edu.school;
            entry.querySelector('.degree').value = edu.degree;
            entry.querySelector('.graduation-date').value = edu.graduationDate;
        });
        const experienceEntries = document.querySelectorAll('.experience-entry');
        this.resumeData.experience.forEach((exp, index) => {
            const entry = experienceEntries[index];
            entry.querySelector('.company').value = exp.company;
            entry.querySelector('.position').value = exp.position;
            entry.querySelector('.start-date').value = exp.startDate;
            entry.querySelector('.end-date').value = exp.endDate;
            entry.querySelector('.description').value = exp.description;
        });
        const skillInputs = document.querySelectorAll('.skill-input');
        this.resumeData.skills.forEach((skill, index) => {
            skillInputs[index].value = skill;
        });
    }
}
// Initialize the ResumeBuilder
const resumeBuilder = new ResumeBuilder();
