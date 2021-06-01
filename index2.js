// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer")
const path = require("path");
const generateMarkdown= require("./utils/generateMarkdown.js")




//array of technologies

// TODO: Create an array of questions for user input
const questions = [
    //example question format types - input, list etc - look up types in inquirer docs - list takes an array of choices user selects
    {
        type: "input",
        name: "name",//
        message: "What is your name?",
    },
    {
        type: "input",
        name: "github",//
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "email",//
        message: "What is your email address?",
        },
    {
        type: "input",
        name: "title",//
        message: "What is your application's title?",
    },
    {
        type: "input",
        name: "images",//
        message: "Please submit any links to images or videos you would like to place within your readme file, separated by comma",
    },
    {
        type: "input",
        name: "objective",//
        message: "What objective does this application seek to achieve?",
    },
    {
        type: "input",
        name: "userstory",//
        message: "What is the user story associated with this application?",
    },
    {
        type: "checkbox",
        name: "technologies",//
        message: "What technologies are used in this application?",
        choices: ["javascript", "HTML", "CSS", "node.js", "inquirer", "git"],
    },
    {
        type: "input",
        name: "tech",//
        message: "Please list any additional technologies used, delineated by commas.",
    },
    {
        type: "input",
        name: "installation",//
        message: "Please write out installation instructions necessary to install this program",
    },
    {
        type: "input",
        name: "usage",//
        message: "Please write instructions on how to run this application",
    },
    {
        type: "input",
        name: "credits",//
        message: "List any groups or individuals who assisted you in the development of this application",
    },
    {
        type: "input",
        name: "testing",//
        message: "Please write out any applicable testing information",
    },
    {
        type: "checkbox",
        name: "licenses",//
        message: "What license would you like to use for this application?",
        choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 3-clause Clear license",
        "Creative Commons license family", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0",
        "Do What The F*ck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License family", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License family", "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC","LaTeX Project Public License v1.3c", "Microsoft Public License", "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "PostgreSQL License", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"],
    },
   
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
            writeToFile("README.md", generateMarkdown(response))
        }
    )
}

// Function call to initialize app
init();





