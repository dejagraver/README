// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "Title",
        validate: answers => {
            if (answers !== "") {
                return true;
            } 
            return "Please enter a valid Title";
        }
    }, 
    {
        type: "input",
        message: "Write a project description:",
        name: "Description"
    }, 
    {
        type: "input",
        message: "Include Installation Instructions",
        name: "Installation"
    }, 
    {
        type: "input",
        message: "Include intructions on how to use the application",
        name: "Usage"
    }, 
    {
        type: "input",
        message: "What are the contribution guidelines for other developers?",
        name: "Contribution"
    }, 
    {
        type: "input",
        message: "Include examples for the application to be tested in",
        name: "Tests"
    }, 
    {
        type: "list",
        message: "Choose a sofware license for the application from the list of options: ",
        name: "License",
        choices:[
            "MIT License", 
            "ISC License",
            "Boost Software License", 
            "Apache License", 
            "The Unlicense",
            "Mozilla Public License"
        ]
    },
    {
        type: "input",
        message: "Enter your GitHub Username: ",
        name: "GitHub",
        validate: answers => {
            if (answers !== "") {
                return true;
            } 
            return "Please enter a valid GitHub username!";
        }
    },
    {
        type: "input",
        message: "Enter your email address: ",
        name: "Email",
          validate: answers => {
            if (answers !== "") {
                if (answers !== "") {
                    return true;
                }
                return "Please enter a valid Email!";
            }
        }
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, err => {
        if (err) {
            return console.log(err);
        }
        console.log('README File Created')

    });
}


// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions)
        .then(answers => { 
            writeToFile("README.md", generateMarkdown({...answers}))
        });
}
// Function call to initialize app
init();

