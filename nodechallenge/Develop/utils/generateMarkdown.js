
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return ` 
  <h1> ${answers.Title} </h1>
  <img src = "https://img.shields.io/badge/license-${answers.License}-brightgreen"><br />

  #Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  <br />

  <a name="Description"> #Description </a>
  ${answers.Description}
  <br />

  <a name="Installation">#Installation</a>
  ${answers.Installation}
  <br />

  <a name="Usage">#Usage</a>
  ${answers.Usage}
  <br />

  #Contribution
  ${answers.Contribution}
  <br />
  
  #Tests
  ${answers.Tests}
  <br />

  #License
  <img src = "https://img.shields.io/badge/license-${answers.License}-brightgreen"><br />
  ${answers.License}
  <br />

  #Questions <br />
Contact the owner of the Repository for additional questions through:

* Email: ${answers.GitHub}

* GitHub: ${answers.Email}`;
  
}

module.exports = generateMarkdown;
