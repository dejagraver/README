// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
  }

  return `![badge](${renderLicenseLink(license)})`;
}
renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return '';
  }

  return (`https://img.shields.io/badge/license-${license}-green`).split(" ").join("%50");
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return '';
  }

  return`##License${license}`;
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
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)

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
  ##GitHub
  ${answers.GitHub}
  ##Email
  ${answers.Email}`;
}

module.exports = generateMarkdown;
