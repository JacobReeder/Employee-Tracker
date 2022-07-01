const db = require('./db/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const {trackerPrompt, 
       nextChoice, 
      // updateEmp
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
   inquirer.prompt(trackerPrompt).then(result => {
    
  if (result.res === 'View Employee') {
       db.query(seeEmployee, (err, rows) => {
        console.table(rows);
        start();
       })
    }

  if (result.res === 'Add an Employee') {
     inq.prompt(nextChoice).then(res => {
      console.log(res);
     const managerId = parseManager(res.manager)
     const params = [res.firstName, res.lastName, res.role, managerId]
   
       db.query(nextChoice, params, (err, result) => {
            if(err) throw err;
            console.log('Employee Added!');
            start();
          })          
       })
    }
  
  if (result.res === 'Update Employee') {
    db.query(getEmployee, (err,data) => {
     if (err) throw err;
     console.log('-------------')
     console.table(data)
    })
   // setTimeout(()=> {
    //  inquirer.prompt(/*updateEmp*/).then(res => {
     //   const employeeId = res.employeeId
     //   const roleId = parseRole(res.roleName)
     //   db.query(updateEmployee, [ employeeId, roleId ], (err, res) => {
     //     console.log('Employee Role changed');
     //   })
    //  })
   // }, 1000)
 // }
  
  if (result.res === 'View Role') {
    db.query(seeRoles, (err, res) => {
      if (err) throw err;
      console.log('------')
      console.table(res);
      RunApp();
    }) 
  }  
   if (result.res === 'Add Role') {
     inq.prompt(newRole).then(res => {
      const role = res.name
      const salary = res.salary
      const department = res.department

      db.query(newRole, [role, salary, department], (err, res) => {
        if (err) throw err;
        console.log('Role added!')
        RunApp();
      })
     })
    }
  
   /* if (result.res === 'View Department') {
   // inguirer.prompt([
    }

    if (result.res === 'New Department') {
    }
  
    if (result.res === 'DONE') {
     //inguirer.prompt([
    }*/
  }
}
)}

RunApp();





         

 





