const express = require('express');
const app = express();
const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck');

var inquirer = require('inquirer');

/*class RunApp {
  
  constructor () {

    this.appLogo= `
    
    =================
    Employee Tracker
    =================
    
   \n `

   console.clear();
   console.log(this.appLogo)
   
 }

           

 
    

   



////TODO: link console.table here?
/////TODO: create if statements depending on each choice?
////TODO: will need to use async and new sql to display sql data in the app
///TODO; export inquirer prompt into an index

/* const trackerProject = () => {

}
*/ 


  //  trackerPrompt().then(answers => console.log(answers));
    //TODO: Use this for if statements?
    //trackerPrompt()
    //.then(answers => console.log(answers))
    //.then(trackerProject)
    //.then(trackerAnswers => console.log(projectAnswers))
 // })



         

 





