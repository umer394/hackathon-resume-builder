const form = document.getElementById('ResumeForm') as HTMLFormElement
const resumeDisplayElement = document.getElementById('Resume-display') as HTMLDivElement
const toggleButton = document.getElementById("toggleSkillsButton") as HTMLButtonElement;
const skillsSection = document.getElementById("skillsSection") as HTMLDivElement;
const shareableLinkDiv = document.getElementById('shareable-link-div') as HTMLDivElement
const shareableLink = document.getElementById('shareable-link') as HTMLAnchorElement
const downloadPdf = document.getElementById('download-pdf') as HTMLButtonElement


form.addEventListener('submit',(event:Event) => {
    event.preventDefault();
    
    const username = (document.getElementById('username') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const field = (document.getElementById('field') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const url = (document.getElementById('url') as HTMLInputElement).value
    const summary = (document.getElementById('summary') as HTMLInputElement).value
    const department = (document.getElementById('department') as HTMLInputElement).value
    const departmentText = (document.getElementById('department-text') as HTMLInputElement).value
    const departmentYear = (document.getElementById('department-year') as HTMLInputElement).value
    const project = (document.getElementById('project') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skill1 = (document.getElementById('skill-1') as HTMLInputElement).value
    const skill2 = (document.getElementById('skill-2') as HTMLInputElement).value
    const skill3 = (document.getElementById('skill-3') as HTMLInputElement).value
    const projectHeading = (document.getElementById('projectHeading') as HTMLInputElement).value
    const expCompany = (document.getElementById('company') as HTMLInputElement).value
    const expPosition = (document.getElementById('position') as HTMLInputElement).value

    const resumeData = {name,field,email,url,summary,department,departmentText,departmentYear,
        project,experience,skill1,skill2,skill3,projectHeading,expCompany,expPosition
    }

    localStorage.setItem(username,JSON.stringify(resumeData));

    const resumeHTML = `
    <form action="" id="ResumeForm" class="bg-black text-white flex max-w-md mx-auto p-6 shadow-lg rounded-lg min-w-fit">
        <div class="flex flex-col justify-between mx-auto">
            <div class="mt-5 justify-start items-start">
                <h1 class="text-3xl font-semibold"><span contenteditable="true">${name}</span></h1>
                <h1 class="text-3xl font-semibold"><span contenteditable="true">${username}</span></h1>
                <p><span contenteditable="true">${field}</span></p>
            </div>
            <hr>
            <div class="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5">
                <div class="">
                    <h1 class="font-bold">Contact</h1>
                    
                        <li><span contenteditable="true">${phone}</span></li>
                        <li><span contenteditable="true">${email}</span></li>
                        <li><a href="${url}"><span contenteditable="true">${url}</span></a></li>
                    
                </div>
                <div class="">
                    <h1 class="font-bold">Summary</h1>
                    <p><span contenteditable="true">${summary}</span></p>
                    
                </div>
            </div>
            <hr> 
            <div class="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5">
                <div>
                    <h1 class="font-bold">Education</h1>
                    <label for="" class="font-semibold"><span contenteditable="true">${department}</span></label>
                    <h2><span contenteditable="true"><span contenteditable="true">${departmentText}</span></h2>
                    <h3><span contenteditable="true"><span contenteditable="true">${departmentYear}</span></h3>
                </div>
                <div>
                    <h1 class="font-bold">Projects</h1>
                    <label for="" class="font-semibold"><span contenteditable="true">${projectHeading}</span></label>
                    <p><span contenteditable="true">${project}</span></p>
                    
                </div>
            </div>
            <hr> 
            <div class="grid  grid-cols-1  mt-4">
                <h1 class=font-bold>Experience</h1>
                <h1 class=font-semibold><span contenteditable="true">${expCompany}</span></h1>
                <h1 class=font-semibold><span contenteditable="true">${expPosition}</span></h1>
                <p><span contenteditable="true">${experience}</span></p>
            </div>
            <hr>
            <div class="grid  grid-cols-1  mt-2" id="skillsSection">
                <h1 class="font-bold">Skills</h1>
                <div class="flex space-x-6 mt-1">
                    <h1 value="" class="border-2 rounded-lg"><span contenteditable="true">${skill1}</span></h1>
                    <h1 value="" class="border-2 rounded-lg"><span contenteditable="true">${skill2}</span></h1>
                    <h1 value="" class="border-2 rounded-lg"><span contenteditable="true">${skill3}</span></h1>
                </div>
            </div>
             <div>
                <button type="button" class="w-full border-2 mt-1 font-bold bg-red-700 hover:bg-black" id="toggleSkillsButton"><span contenteditable="false">Toggle Skills</span></button>
            </div> 
            </div>
        </div>
    </form>
    `;
    // if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;

        if (toggleButton && skillsSection) {
            toggleButton.addEventListener("click", () => {
                skillsSection.style.display=skillsSection.style.display === "none" ? "block" : "none"
                
            });
        }

        const shareableUrl = `${window.location.origin}${window.location.pathname}?username=${encodeURIComponent(username)}`

        shareableLinkDiv.style.display = 'block'
        shareableLink.href = shareableUrl
        shareableLink.textContent = shareableUrl


    // }else{
    //     console.error('The Resume display element is missing')
    // }
})

downloadPdf.addEventListener('click',()=>{
    window.print() 
})

window.addEventListener('DOMContentLoaded',()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username')
    if(username){
        const savedResumeData = localStorage.getItem(username);
        if(savedResumeData){
            const resumeData:any = JSON.parse(savedResumeData)
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('field') as HTMLInputElement).value = resumeData.field;
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('url') as HTMLInputElement).value = resumeData.url;
            (document.getElementById('summary') as HTMLTextAreaElement).value = resumeData.summary;
            (document.getElementById('department') as HTMLTextAreaElement).value = resumeData.department;
            (document.getElementById('department-text') as HTMLTextAreaElement).value = resumeData.departmentText;
            (document.getElementById('project') as HTMLTextAreaElement).value = resumeData.project;
            (document.getElementById('department-year') as HTMLInputElement).value = resumeData.departmentYear;
            (document.getElementById('department-year') as HTMLInputElement).value = resumeData.departmentYear;
            (document.getElementById('projectHeading') as HTMLInputElement).value = resumeData.projectHeading;
            (document.getElementById('company') as HTMLInputElement).value = resumeData.expCompany;
            (document.getElementById('position') as HTMLInputElement).value = resumeData.expPosition;
            (document.getElementById('skill-1') as HTMLInputElement).value = resumeData.skill1;
            (document.getElementById('skill-2') as HTMLInputElement).value = resumeData.skill2;
            (document.getElementById('skill-3') as HTMLInputElement).value = resumeData.skill3;
            (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
        }
    }
})