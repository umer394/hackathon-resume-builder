var form = document.getElementById('ResumeForm');
var resumeDisplayElement = document.getElementById('Resume-display');
var toggleButton = document.getElementById("toggleSkillsButton");
var skillsSection = document.getElementById("skillsSection");
var shareableLinkDiv = document.getElementById('shareable-link-div');
var shareableLink = document.getElementById('shareable-link');
var downloadPdf = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var field = document.getElementById('field').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var url = document.getElementById('url').value;
    var summary = document.getElementById('summary').value;
    var department = document.getElementById('department').value;
    var departmentText = document.getElementById('department-text').value;
    var departmentYear = document.getElementById('department-year').value;
    var project = document.getElementById('project').value;
    var experience = document.getElementById('experience').value;
    var skill1 = document.getElementById('skill-1').value;
    var skill2 = document.getElementById('skill-2').value;
    var skill3 = document.getElementById('skill-3').value;
    var projectHeading = document.getElementById('projectHeading').value;
    var expCompany = document.getElementById('company').value;
    var expPosition = document.getElementById('position').value;
    var resumeData = { name: name, field: field, email: email, url: url, summary: summary, department: department, departmentText: departmentText, departmentYear: departmentYear, project: project, experience: experience, skill1: skill1, skill2: skill2, skill3: skill3, projectHeading: projectHeading, expCompany: expCompany, expPosition: expPosition
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHTML = "\n    <form action=\"\" id=\"ResumeForm\" class=\"bg-black text-white flex max-w-md mx-auto p-6 shadow-lg rounded-lg min-w-fit\">\n        <div class=\"flex flex-col justify-between mx-auto\">\n            <div class=\"mt-5 justify-start items-start\">\n                <h1 class=\"text-3xl font-semibold\"><span contenteditable=\"true\">".concat(name, "</span></h1>\n                <h1 class=\"text-3xl font-semibold\"><span contenteditable=\"true\">").concat(username, "</span></h1>\n                <p><span contenteditable=\"true\">").concat(field, "</span></p>\n            </div>\n            <hr>\n            <div class=\"grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5\">\n                <div class=\"\">\n                    <h1 class=\"font-bold\">Contact</h1>\n                    \n                        <li><span contenteditable=\"true\">").concat(phone, "</span></li>\n                        <li><span contenteditable=\"true\">").concat(email, "</span></li>\n                        <li><a href=\"").concat(url, "\"><span contenteditable=\"true\">").concat(url, "</span></a></li>\n                    \n                </div>\n                <div class=\"\">\n                    <h1 class=\"font-bold\">Summary</h1>\n                    <p><span contenteditable=\"true\">").concat(summary, "</span></p>\n                    \n                </div>\n            </div>\n            <hr> \n            <div class=\"grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5\">\n                <div>\n                    <h1 class=\"font-bold\">Education</h1>\n                    <label for=\"\" class=\"font-semibold\"><span contenteditable=\"true\">").concat(department, "</span></label>\n                    <h2><span contenteditable=\"true\"><span contenteditable=\"true\">").concat(departmentText, "</span></h2>\n                    <h3><span contenteditable=\"true\"><span contenteditable=\"true\">").concat(departmentYear, "</span></h3>\n                </div>\n                <div>\n                    <h1 class=\"font-bold\">Projects</h1>\n                    <label for=\"\" class=\"font-semibold\"><span contenteditable=\"true\">").concat(projectHeading, "</span></label>\n                    <p><span contenteditable=\"true\">").concat(project, "</span></p>\n                    \n                </div>\n            </div>\n            <hr> \n            <div class=\"grid  grid-cols-1  mt-4\">\n                <h1 class=font-bold>Experience</h1>\n                <h1 class=font-semibold><span contenteditable=\"true\">").concat(expCompany, "</span></h1>\n                <h1 class=font-semibold><span contenteditable=\"true\">").concat(expPosition, "</span></h1>\n                <p><span contenteditable=\"true\">").concat(experience, "</span></p>\n            </div>\n            <hr>\n            <div class=\"grid  grid-cols-1  mt-2\" id=\"skillsSection\">\n                <h1 class=\"font-bold\">Skills</h1>\n                <div class=\"flex space-x-6 mt-1\">\n                    <h1 value=\"\" class=\"border-2 rounded-lg\"><span contenteditable=\"true\">").concat(skill1, "</span></h1>\n                    <h1 value=\"\" class=\"border-2 rounded-lg\"><span contenteditable=\"true\">").concat(skill2, "</span></h1>\n                    <h1 value=\"\" class=\"border-2 rounded-lg\"><span contenteditable=\"true\">").concat(skill3, "</span></h1>\n                </div>\n            </div>\n             <div>\n                <button type=\"button\" class=\"w-full border-2 mt-1 font-bold bg-red-700 hover:bg-black\" id=\"toggleSkillsButton\"><span contenteditable=\"false\">Toggle Skills</span></button>\n            </div> \n            </div>\n        </div>\n    </form>\n    ");
    // if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
    if (toggleButton && skillsSection) {
        toggleButton.addEventListener("click", function () {
            skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
        });
    }
    var shareableUrl = "".concat(window.location.origin).concat(window.location.pathname, "?username=").concat(encodeURIComponent(username));
    shareableLinkDiv.style.display = 'block';
    shareableLink.href = shareableUrl;
    shareableLink.textContent = shareableUrl;
    // }else{
    //     console.error('The Resume display element is missing')
    // }
});
downloadPdf.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData)(document.getElementById('username')).value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('field').value = resumeData.field;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('url').value = resumeData.url;
            document.getElementById('summary').value = resumeData.summary;
            document.getElementById('department').value = resumeData.department;
            document.getElementById('department-text').value = resumeData.departmentText;
            document.getElementById('project').value = resumeData.project;
            document.getElementById('department-year').value = resumeData.departmentYear;
            document.getElementById('department-year').value = resumeData.departmentYear;
            document.getElementById('projectHeading').value = resumeData.projectHeading;
            document.getElementById('company').value = resumeData.expCompany;
            document.getElementById('position').value = resumeData.expPosition;
            document.getElementById('skill-1').value = resumeData.skill1;
            document.getElementById('skill-2').value = resumeData.skill2;
            document.getElementById('skill-3').value = resumeData.skill3;
            document.getElementById('experience').value = resumeData.experience;
        }
    }
});
