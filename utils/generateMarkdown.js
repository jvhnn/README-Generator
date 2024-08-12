// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    const badges = {
      "Apache": "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
      "GPL v3": "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
      "MIT": "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
      "BSD 2-Clause": "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)",
      "BSD 3-Clause": "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)",
    };
    return badges[license];
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    const links = {
      "Apache": "https://opensource.org/licenses/Apache-2.0",
      "GPL v3": "https://www.gnu.org/licenses/gpl-3.0",
      "MIT": "https://opensource.org/licenses/MIT",
      "BSD 2-Clause": "https://opensource.org/licenses/BSD-2-Clause",
      "BSD 3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
    };
    return links[license];
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
This project is licensed under the ${license} License. For more information, please visit ${renderLicenseLink(
      license
    )}.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## 🧐 Description

${data.description}

## 📒 Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)


## 🔧 Installation

${data.installation}

## 📦 Usage

${data.usage}

## 🔥 Contributing

${data.contribution}

## 🚀 Tests

${data.tests}

## License 

${renderLicenseSection(data.license)}

## Questions

For any questions/ concerns, please contact me through the information provided below: 

GitHub: [${data.github}](${data.github})

Email: <a href="mailto:${data.email}">${data.email}</a>

`;
}

export default generateMarkdown;
