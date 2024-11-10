// declare const html2pdf: any;


// let education = document.querySelector(".education")
// let formCheck = document.getElementById("resumeForm") as HTMLFormElement;

// let icon = document.querySelector(".education span img") as HTMLElement
// let sec1 = document.querySelector(".sec1") as HTMLElement
// let resume = document.querySelector(".resume") as HTMLElement
// let form = document.querySelector(".form") as HTMLElement

// let skills = document.querySelector(".skills")
// let icon2 = document.querySelector(".skills span img") as HTMLElement
// let sec2 = document.querySelector(".sec2") as HTMLElement

// let contact = document.querySelector(".contact")
// let icon4 = document.querySelector(".contact span img") as HTMLElement
// let sec4 = document.querySelector(".sec4") as HTMLElement

// let workExperience = document.querySelector(".workExperience")
// let sec3 = document.querySelector(".sec3") as HTMLElement
// let icon3 = document.querySelector(".workExperience span img") as HTMLElement

// let button = document.querySelector(".btn")as HTMLButtonElement

// let conName = document.getElementById("ConName") as HTMLInputElement
// let resName = document.getElementById("resName") as HTMLElement

// let conEdu = document.getElementById("ConEdu") as HTMLInputElement
// let resEdu = document.getElementById("resEdu") as HTMLElement

// let conSkills = document.getElementById("ConSkills") as HTMLInputElement
// let resSkills = document.getElementById("resSkills") as HTMLElement

// let conExp = document.getElementById("ConExp") as HTMLInputElement
// let resExp = document.getElementById("resExp") as HTMLElement

// let conGmail = document.getElementById("ConGmail") as HTMLInputElement
// let resGmail = document.getElementById("resGmail") as HTMLElement

// let downloadBtn = document.getElementById("downloadBtn") as HTMLButtonElement
// let resumeLink = document.querySelector(".uniqueUrl") as HTMLParagraphElement;
// let buildForm = document.querySelector("#buildForm") as HTMLElement


// form.addEventListener('submit', (event: Event) => {
//     event.preventDefault();

//     // Scroll smoothly to the resume section
//     resume.scrollIntoView({ behavior: "smooth" });

//     // Get form values
//     const name = conName.value;
//     const education = conEdu.value;
//     const skills = conSkills.value;
//     const experience = conExp.value;
//     const email = conGmail.value;

//     // Update resume preview
//     resName.textContent = name;
//     resEdu.textContent = education;
//     resSkills.textContent = skills;
//     resExp.textContent = experience;
//     resGmail.textContent = email;

//     // Create sharable URL with query parameters
//     const urlParams = new URLSearchParams({
//         name,
//         education,
//         skills,
//         experience,
//         email,
//     });

//     const sharableUrl = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}`;
//     resumeLink.innerHTML = `Share your resume: <a href="${sharableUrl}" target="_blank">${sharableUrl}</a>`;


//     if (!conName || !conEdu || !conExp || !conGmail || !conSkills || !skills) {
//                  alert("Please fill out all fields.");
//                  return;
//              }

// });


// // On page load, populate form with query parameters if available
// window.addEventListener('load', () => {

//     const urlParams = new URLSearchParams(window.location.search);

//     const name = urlParams.get('name') || '';
//     const education = urlParams.get('education') || '';
//     const skills = urlParams.get('skills') || '';
//     const experience = urlParams.get('experience') || '';
//     const email = urlParams.get('email') || '';

//     // Populate form
//     conName.value = name;
//     conEdu.value = education;
//     conSkills.value = skills;
//     conExp.value = experience;
//     conGmail.value = email;

//     // Populate resume preview
//     resName.textContent = name;
//     resEdu.textContent = education;
//     resSkills.textContent = skills;
//     resExp.textContent = experience;
//     resGmail.textContent = email;


// });

// conName.addEventListener("keyup",()=>{
//     let formName = conName.value
//     resName.textContent = formName  
// })

// conEdu.addEventListener("keyup",()=>{
//     let formEdu = conEdu.value
//     resEdu.textContent = formEdu  
// })

// conSkills.addEventListener("keyup",()=>{
//     let formSkills = conSkills.value
//     resSkills.textContent = formSkills  
// })

// conGmail.addEventListener("keyup",()=>{
//     let formGmail = conGmail.value
//     resGmail.textContent = formGmail  
// })

// conExp.addEventListener("keyup",()=>{
//     let formExp = conExp.value
//     resExp.textContent = formExp  
// })



// icon.addEventListener("click",()=>{
//     if(sec1.style.display === "none"){
//         sec1.style.display = "block"
//         icon.textContent = "Hide"
//     }else {
//         sec1.style.display = "none";
//         icon.textContent = "Show"; // Change button text to 'Show'

//     }
// }
// )
// icon2.addEventListener("click",()=>{
//     if(sec2.style.display === "none"){
//         sec2.style.display = "block"
//         icon2.textContent = "Hide"
//     }else {
//         sec2.style.display = "none";
//         icon2.textContent = "Show"; // Change button text to 'Show'

//     }
// }
// )
// icon3.addEventListener("click",()=>{
//     if(sec3.style.display === "none"){
//         sec3.style.display = "block"
//         icon3.textContent = "Hide"
//     }else {
//         sec3.style.display = "none";
//         icon3.textContent = "Show"; // Change button text to 'Show'

//     }
// }
// )
// icon4.addEventListener("click",()=>{
//     if(sec4.style.display === "none"){
//         sec4.style.display = "block"
//         icon4.textContent = "Hide"
//     }else {
//         sec4.style.display = "none";
//         icon4.textContent = "Show"; // Change button text to 'Show'

//     }
// }
// )



//   downloadBtn.addEventListener('click', () => {
//     if (typeof html2pdf === 'undefined') {
//         alert('Error: html2pdf library is not loaded.');
//         return;
//     }

//     const resumeOptions = {
//         margin: 1,
//         filename: 'resume.pdf',
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

//     html2pdf().from(resume).set(resumeOptions).save();

// });
  
declare const html2pdf: any;

interface ResumeData {
    name: string;
    email: string;
    phone: string;
    location: string;
    photo: string;
    education: EducationEntry[];
    experience: ExperienceEntry[];
    skills: string[];
}

interface EducationEntry {
    school: string;
    degree: string;
    graduationDate: string;
}

interface ExperienceEntry {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
}

class ResumeBuilder {
    private form: HTMLFormElement;
    private previewSection: HTMLElement;
    private downloadButton: HTMLButtonElement;
    private shareLinkSection: HTMLElement;
    private resumeData: ResumeData;

    constructor() {
        this.form = document.getElementById('resumeForm') as HTMLFormElement;
        this.previewSection = document.getElementById('resumePreview') as HTMLElement;
        this.downloadButton = document.getElementById('downloadResume') as HTMLButtonElement;
        this.shareLinkSection = document.getElementById('shareLink') as HTMLElement;
        this.resumeData = this.initResumeData();

        this.initEventListeners();
        this.loadSharedResume();
    }

    private initResumeData(): ResumeData {
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

    private initEventListeners(): void {
        this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        this.downloadButton.addEventListener('click', () => this.downloadResume());
        document.getElementById('addEducation')?.addEventListener('click', () => this.addEducationField());
        document.getElementById('addExperience')?.addEventListener('click', () => this.addExperienceField());
        document.getElementById('addSkill')?.addEventListener('click', () => this.addSkillField());
        document.getElementById('photo')?.addEventListener('change', (e) => this.handlePhotoUpload(e));
        this.form.addEventListener('input', () => this.updateResumeData());
    }

    private handleFormSubmit(e: Event): void {
        e.preventDefault();
        this.updateResumeData();
        this.updatePreview();
        this.generateShareLink();
    }

    private updateResumeData(): void {
        const formData = new FormData(this.form);
        this.resumeData.name = formData.get('name') as string;
        this.resumeData.email = formData.get('email') as string;
        this.resumeData.phone = formData.get('phone') as string;
        this.resumeData.location = formData.get('location') as string;

        this.resumeData.education = this.getEducationData();
        this.resumeData.experience = this.getExperienceData();
        this.resumeData.skills = this.getSkillsData();

        this.updatePreview();
    }

    private getEducationData(): EducationEntry[] {
        const educationEntries = document.querySelectorAll('.education-entry');
        return Array.from(educationEntries).map(entry => ({
            school: (entry.querySelector('.school') as HTMLInputElement).value,
            degree: (entry.querySelector('.degree') as HTMLInputElement).value,
            graduationDate: (entry.querySelector('.graduation-date') as HTMLInputElement).value
        }));
    }

    private getExperienceData(): ExperienceEntry[] {
        const experienceEntries = document.querySelectorAll('.experience-entry');
        return Array.from(experienceEntries).map(entry => ({
            company: (entry.querySelector('.company') as HTMLInputElement).value,
            position: (entry.querySelector('.position') as HTMLInputElement).value,
            startDate: (entry.querySelector('.start-date') as HTMLInputElement).value,
            endDate: (entry.querySelector('.end-date') as HTMLInputElement).value,
            description: (entry.querySelector('.description') as HTMLTextAreaElement).value
        }));
    }

    private getSkillsData(): string[] {
        const skillInputs = document.querySelectorAll('.skill-input');
        return Array.from(skillInputs).map(input => (input as HTMLInputElement).value);
    }

    private updatePreview(): void {
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

    private addEducationField(): void {
        const container = document.getElementById('educationContainer');
        const educationEntry = document.createElement('div');
        educationEntry.className = 'education-entry';
        educationEntry.innerHTML = `
            <input type="text" class="school" placeholder="School" required>
            <input type="text" class="degree" placeholder="Degree" required>
            <input type="text" class="graduation-date" placeholder="Date" required>
            <button type="button" class="remove-btn">Remove</button>
        `;
        container?.appendChild(educationEntry);
        educationEntry.querySelector('.remove-btn')?.addEventListener('click', () => {
            educationEntry.remove();
            this.updateResumeData();
        });
    }

    private addExperienceField(): void {
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
        container?.appendChild(experienceEntry);
        experienceEntry.querySelector('.remove-btn')?.addEventListener('click', () => {
            experienceEntry.remove();
            this.updateResumeData();
        });
    }

    private addSkillField(): void {
        const container = document.getElementById('skillsContainer');
        const skillEntry = document.createElement('div');
        skillEntry.className = 'skill-entry';
        skillEntry.innerHTML = `
            <input type="text" class="skill-input" placeholder="Skill" required>
            <button type="button" class="remove-btn">Remove</button>
        `;
        container?.appendChild(skillEntry);
        skillEntry.querySelector('.remove-btn')?.addEventListener('click', () => {
            skillEntry.remove();
            this.updateResumeData();
        });
    }

    private handlePhotoUpload(e: Event): void {
        const input = e.target as HTMLInputElement;
        const file = input.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.resumeData.photo = e.target?.result as string;
                this.updatePreview();
            };
            reader.readAsDataURL(file);
        }
    }

    private downloadResume(): void {
        const element = this.previewSection;
        html2pdf()
            .from(element)
            .save('resume.pdf');
    }

    private generateShareLink(): void {
        const data = JSON.stringify(this.resumeData);
        const encodedData = encodeURIComponent(data);
        const shareLink = `${window.location.origin}${window.location.pathname}?data=${encodedData}`;
        this.shareLinkSection.innerHTML = `
            <p>Share your resume:</p>
            <input type="text" value="${shareLink}" readonly>
        `;
    }

    private loadSharedResume(): void {
        const urlParams = new URLSearchParams(window.location.search);
        const encodedData = urlParams.get('data');
        if (encodedData) {
            try {
                const decodedData = decodeURIComponent(encodedData);
                this.resumeData = JSON.parse(decodedData);
                this.populateForm();
                this.updatePreview();
            } catch (error) {
                console.error('Error loading shared resume:', error);
            }
        }
    }

    private populateForm(): void {
        (document.getElementById('name') as HTMLInputElement).value = this.resumeData.name;
        (document.getElementById('email') as HTMLInputElement).value = this.resumeData.email;
        (document.getElementById('phone') as HTMLInputElement).value = this.resumeData.phone;
        (document.getElementById('location') as HTMLInputElement).value = this.resumeData.location;

        this.resumeData.education.forEach(() => this.addEducationField());
        this.resumeData.experience.forEach(() => this.addExperienceField());
        this.resumeData.skills.forEach(() => this.addSkillField());

        const educationEntries = document.querySelectorAll('.education-entry');
        this.resumeData.education.forEach((edu, index) => {
            const entry = educationEntries[index];
            (entry.querySelector('.school') as HTMLInputElement).value = edu.school;
            (entry.querySelector('.degree') as HTMLInputElement).value = edu.degree;
            (entry.querySelector('.graduation-date') as HTMLInputElement).value = edu.graduationDate;
        });

        const experienceEntries = document.querySelectorAll('.experience-entry');
        this.resumeData.experience.forEach((exp, index) => {
            const entry = experienceEntries[index];
            (entry.querySelector('.company') as HTMLInputElement).value = exp.company;
            (entry.querySelector('.position') as HTMLInputElement).value = exp.position;
            (entry.querySelector('.start-date') as HTMLInputElement).value = exp.startDate;
            (entry.querySelector('.end-date') as HTMLInputElement).value = exp.endDate;
            (entry.querySelector('.description') as HTMLTextAreaElement).value = exp.description;
        });

        const skillInputs = document.querySelectorAll('.skill-input');
        this.resumeData.skills.forEach((skill, index) => {
            (skillInputs[index] as HTMLInputElement).value = skill;
        });
    }
}

// Initialize the ResumeBuilder
const resumeBuilder = new ResumeBuilder();



