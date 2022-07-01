const db = require('./db/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const {trackerPrompt, 
       nextChoice, 
       updateEmp,
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
        addDept } = require('./pages/data')

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
     const managerId = getName(res.manager)
     const params = [res.firstName, res.lastName, res.role, managerId]
   
       db.query(nextChoice, params, (err, result) => {
            if(err) throw err;
            console.log('Employee Added!');
            RunApp();
          })          
       })
    }
  
  if (result.res === 'Update Employee') {
    db.query(getEmployee, (err,data) => {
     if (err) throw err;
     console.log('-------------')
     console.table(data)
    })
    setTimeout(()=> {
      inquirer.prompt(updateEmp).then(res => {
        const employeeId = res.employeeId
       const roleId = getRole(res.roleName)
        db.query(updateEmployee, [ employeeId, roleId ], (err, res) => {
          if(err) throw err;
          console.log('Employee Role changed');
          RunApp();
        })
     })
    }, 1000)
  }
  
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

      db.query(addRole, [role, salary, department], (err, res) => {
        if (err) throw err;
        console.log('Role added!')
        RunApp();
      })
     })
    }
  
    if (result.res === 'View Department') {
       db.query(viewDept, (err, res) => {
        if (err) throw err;
        console.log(`----------`)
        console.table(res);
        RunApp();
       })
    }

    if (result.res === 'New Department') {
    }  inq.prompt(newDep).then(res => {
      db.query(addDept, res.name, (err, res) => {
        if (err) throw err;
        console.log(`Department added!`);
        RunApp();
      })
    })
  }
       
  
  /* if (result.res === 'DONE') {
     console.log(`YOU ARE DONE!`);
    }
  
  }*/
)}

RunApp();





         

 





