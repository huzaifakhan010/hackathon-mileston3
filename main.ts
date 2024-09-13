document.getElementById('Form')?.addEventListener('submit',function(event){
    event.preventDefault();

   const profilepicinput = document.getElementById('profilepic') as HTMLInputElement;
    const nameElement = document.getElementById('Name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

      if( profilepicinput && nameElement && emailElement && phoneElement && addressElement 
        && educationElement && experienceElement){
       
        const myname = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;
        const profilepicfile = profilepicinput.files?.[0];
        const profilepicURL = profilepicfile ? URL.createObjectURL(profilepicfile) : '';
      
    const resumeOutput = `
    <h2>Resume</h2>
     ${profilepicURL? `<Image src="${profilepicURL}" alt= "Profile Picture" class = "profilepic">`: ''}
    <p><strong>Name:</strong>${myname}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Phone Number:</strong>${phone}</p>
    <p><strong>Address:</strong>${address}</p>

    <h3>Education</h3>
    <p>${education}</p>

      <h3>Skills</h3>
    <p>${skills}</p>

      <h3>Experience</h3>
    <p>${experience}</p>
    `;
    const resumeOutputElement = document.getElementById('resumeOutput')
    if(resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput
    }else {
        console.error('the resume output elemnents are missing')
    }
}else {
       console.error('one or more output elements are missing')
}  
}
)