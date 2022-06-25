

const trackerPrompt = {
    type: 'list',
    name: 'sample',
    message: 'Welcome to the Employee Tracker. What would you like to do?',
    choices: ['View All', 'View all Employees', 'View all Departments', 'View all Roles', 'Add an Employee', 'Add a Department', 'Add a Role']
}   

const nextChoice = [
    {
        type: 'input',
        name: 'id',
        message: "What is the Employees ID?"
    },       
    {
        type: 'input',
        name: 'first_name',
        message: "What is the Employees first name?"
       
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What is the Employees last name"
     
    },
    {  type: 'input',
       name: 'role_id',
       message: "What is the Employees role ID?"
    },
    {  type: 'input',
       name: 'manager_id',
        message: "What is the Employees manager ID?"
   
    }
]

const newDep = [
    {
        type: 'input',
        name: 'department_name',
        message: "What is the Department's name?",
     
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Department's ID?",
     
    }    
]

const newRole = [
    {
      type: 'input',
      name: 'id',
      message: "What is Role id?"
    },
    {
      type: 'input',
      name: 'title',
      message: "?"
    },

   {
      type: 'input',
      name: 'salary',
      message: "?"
  
  }
]

module.exports = {
    trackerPrompt,
    nextChoice,
    newDep,
    newRole
}



