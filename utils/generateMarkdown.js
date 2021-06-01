//else return `![Github License](https...)`

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  if (licenses !== "None") {
    return `https://img.shields.io/badge/License-${licenses}-lightblue.svg`
    
  }
  return ""``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {}

//if else

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {}
//if else



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title};
  ## Objectives and Description:
  ${data.objective}
  ${data.userstory}
  

  ##Technologies Used
  ${data.technologies}
  ${data.tech}

  ##Installation Instructions
  ${data.installation}

  ##Usage Instructions
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Licenses
  ${data.licenses}
  ${renderLicenseBadge(data.licenses)}
  ## Features
  ${data.images}

  ## How to contribute - please contact
  ${data.name} ${data.email} (https://github.com/${data.github})

  ##Testing
  [https://github.com/${data.testing}

`
}

module.exports = generateMarkdown;
