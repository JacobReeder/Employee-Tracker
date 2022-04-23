const express = require('express');
const app = express();
const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck');

var inquirer = require('inquirer');




const trackerPrompt = () => {

    console.log(`
    =================
    Employee Tracker
    =================
    `);

    return inquirer.prompt([
       {
           type: 'list',
           name: 'sample',
           message: 'Welcome to the Employee Tracker. What would you like to do?',
           choices: ['View All', 'View all Employees', 'View all Employess by Department', 'View Employess by Manager']
       }
    ]);
};

////TODO: add link to sql database here?
/////TODO: create if statements depending on each choice?
////TODO: will need to use async and new sql to display sql data in the app
///TODO; export inquirer prompt into an index

/* const trackerProject = () => {

}
*/ 


    trackerPrompt().then(answers => console.log(answers));
    //TODO: Use this for if statements?
    //trackerPrompt()
    //.then(answers => console.log(answers))
    //.then(trackerProject)
    //.then(trackerAnswers => console.log(projectAnswers))
 // })







 ////////////////////////////////////////////////////////////////////////////
 ////////////Examples and extra code////////////////////////////////////////

 /////alternately.....
 /* .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });*/

//}

         
   ////example from npm inquirer page
/*inquirer
  .prompt([
    Pass your questions in here 
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });*/
 
 /*another example
        {   type: 'input',
           name: 'name',
           message: "What is the managers name? (Required)",
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log('Please enter manager name!');
                   return false;
               }
           }
       },*/




