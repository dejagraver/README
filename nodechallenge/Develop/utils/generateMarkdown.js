// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if(!License){
    return '';
  }

  return `![badge](${renderLicenseLink(License)})`;
}
renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if(!License){
    return '';
  }

  return [(`https://img.shields.io/badge/license-${answers.License}-green`)];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if(!License){
    return '';
  }

  return`##License${License}`;
}
renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  
  return ` 
  ${answers.Title}
  ##Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)

  ##Description

  ${answers.Description}

  ##Installation

  ${answers.Installation}

  ##Usage

  ${answers.Usage}

  ##Contribution

  ${answers.Contribution}

  ##Tests

  ${answers.Tests}

  ##License

  ${answers.License}

  ##Questions
Contact the owner of the Repository for additional questions through:
  Email: ${answers.GitHub}

  GitHub: ${answers.Email}`;
}

module.exports = generateMarkdown;
