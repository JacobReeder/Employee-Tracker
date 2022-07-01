const db = require('./db/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const {trackerPrompt, 
       nextChoice, 
       newDep, 
       newRole} = require('./pages/prompt');

const {getName, 
      getRole} = require('./pages/function')

const { seeEmployee,  
        getEmployee,
        addEmployee,
        updateEmployee,
        seeRoles,
        addRole,
        viewDept,
        addDept } = require('./lib/queries')

console.log(`
=================
Employee Tracker
=================
`)

function RunApp() {
   // inquirer.prompt(menu).then(result => {
    
  if (result.res === 'View Employee') {
       db.query(seeEmployee, (err, rows) => {
        console.table(rows);
        start();
       })
    }

  if (result.res === 'Add an Employee') {
  //  inq.prompt().then(res => {
   //   console.log(res);
   //   const managerId = parseManager(res.manager)
   //   const params = [res.firstName, res.lastName, res.role, managerId]

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







         

 





