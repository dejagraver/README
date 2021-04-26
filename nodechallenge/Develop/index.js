// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "Title"
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
        type: "input",
        message: "Choose a sofware license for the application from the list of options",
        name: "License"
    },
    {
        type: "input",
        message: "Enter your GitHub Username:",
        name: "GitHub"
    },
    {
        type: "input",
        message: "Enter your email address:",
        name: "Email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('README File Created')
    });
}

// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions);
        inquirer.then(answers => generateMarkdown(answers));
        inquirer.then(markdown => writeToFile(file, markdown));
        inquirer.then(response => console.log(response.message));
        inquirer.catch(err => console.log(err));
}

// Function call to initialize app
init();
