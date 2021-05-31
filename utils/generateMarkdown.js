// // //else return `![Github License](https...)`

// // // TODO: Create a function that returns a license badge based on which license is passed in
// // // If there is no license, return an empty string
// // function renderLicenseBadge(license) {
// //   if (license !== "None") {
// //     return
    
// //   }
// //   return ""``
// // }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// //if else

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}
// //if else



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

  ## Features
  ${data.images}

  ## How to contribute - please contact
  ${data.name} ${data.email} ${data.github}

  ##Testing
  ${data.testing}

`
}

module.exports = generateMarkdown;
