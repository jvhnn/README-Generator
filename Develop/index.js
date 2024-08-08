// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (input) => (input ? true : "Title is required!"),
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description of your project.",
    validate: (input) => (input ? true : "Description is required!"),
  },
  {
    type: "input",
    name: "installation",
    message: "Write instructions on how to install your project.",
    validate: (input) => (input ? true : "Instruction is required!"),
  },
  {
    type: "input",
    name: "usage",
    message: "Explain what the project does",
  },
  {
    type: "input",
    name: "contribution",
    message: "Who are the contributers to this project?",
    validate: (input) =>
      input ? true : "At least one contributor must be included.",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license for your project.",
    choices: ["Apache", "GNU", "MIT", "BSD 2-Clause", "BSD 3-Clause"],
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide a link of an example of your project.",
    validate: (input) => (input ? true : "A link must be provided."),
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Sucessfully Generated!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const markdown = generateMarkdown(responses);
    writeToFile("README.md", markdown);
  });
}

// // Function call to initialize app
init();
