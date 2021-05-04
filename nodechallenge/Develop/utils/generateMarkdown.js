// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(License) {
//   if(!License){
//     return '';
//   }

//   return `(${renderLicenseLink(License)})`;
// }
// renderLicenseBadge();

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(License) {
//   if(!License){
//     return '';
//   }

//   return [(`https://img.shields.io/badge/license-${answers.License}-brightgreen`)];
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(License) {
//   if(!License){
//     return '';
//   }

//   return`##License${License}`;
// }
// renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  
  return ` 
  <h1> ${answers.Title} </h1>
  <img src = "https://img.shields.io/badge/license-${answers.License}-brightgreen"><br />

  ##Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  <br />

  ###Description
  ${answers.Description}
  <br />

  ###Installation
  ${answers.Installation}
  <br />

  ###Usage
  ${answers.Usage}
  <br />

  ###Contribution
  ${answers.Contribution}
  <br />
  
  ###Tests
  ${answers.Tests}
  <br />

  ###License
  <img src = "https://img.shields.io/badge/license-${answers.License}-brightgreen"><br />
  ${answers.License}
  <br />

  ###Questions <br />
Contact the owner of the Repository for additional questions through:

* Email: ${answers.GitHub}

* GitHub: ${answers.Email}`;
}

module.exports = generateMarkdown;
