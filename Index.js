const db = require('./db/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const {trackerPrompt, nextChoice, newDep, newRole} = require('./pages/prompt');
const {getName, getRole} = require('./pages/function')

console.log(`
=================
Employee Tracker
=================
`)

function RunApp() {
   //   inquirer.prompt.trackerPrompt.then(result => {
    
  if (result.res === 'View Employee') {
       db.query((err, rows) => {
        console.table(rows);
        start();
       })
    }

  if (result.res === 'Add an Employee') {


    }
  
  if (result.res === 'Update Employee') {

  // inguirer.prompt([

    }
  
  if (result.res === 'View Role') {

    //  inguirer.prompt([
  }
  
 if (result.res === 'Add Role') {
  //  inguirer.prompt([
    }
  
 if (result.res === 'View Department') {
   // inguirer.prompt([
  }

  if (result.res === 'New Department') {
      }
  
  if (result.res === 'DONE') {
   //inguirer.prompt([
 }
 
}







         

 





