// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer")
const path = require("path");
const generateMarkdown= require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    //example question format types - input, list etc - look up types in inquirer docs - list takes an array of choices user selects
    {
    type: "input",
    name: "github",
    message: "What is your github username?"
    }
];

// TODO: Create a function to write README file using user input from our choices above
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app (by calling inquirer)
function init() {
    inquirer.prompt(questions).then(
        (response) => {
            console.log("Your README is being created")
            writeToFile("README.md". generateMarkdown(...response))
        }
    )
}

// Function call to initialize app
init();
