var _a;
(_a = document.getElementById('Form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilepicinput = document.getElementById('profilepic');
    var nameElement = document.getElementById('Name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilepicinput && nameElement && emailElement && phoneElement && addressElement
        && educationElement && experienceElement) {
        var myname = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var profilepicfile = (_a = profilepicinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepicURL = profilepicfile ? URL.createObjectURL(profilepicfile) : '';
        var resumeOutput = "\n    <h2>Resume</h2>\n     ".concat(profilepicURL ? "<Image src=\"".concat(profilepicURL, "\" alt= \"Profile Picture\" class = \"profilepic\">") : '', "\n    <p><strong>Name:</strong>").concat(myname, "</p>\n    <p><strong>Email:</strong>").concat(email, "</p>\n    <p><strong>Phone Number:</strong>").concat(phone, "</p>\n    <p><strong>Address:</strong>").concat(address, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n      <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n\n      <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elemnents are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
