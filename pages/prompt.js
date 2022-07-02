

const trackerPrompt = {
    type: 'list',
    name: 'res',
    message: "Welcome to the Employee Tracker. What would you like to do?",
    choices: ['View All', 
    'Add an Employee',
    'Update Employee',
    'View Role',
    'Add Role',
    'View Departments',  
    'New Department', 
    'Quit']
}   

const nextChoice = [
       
    {
        type: 'input',
        name: 'firstName',
        message: "What is the Employees first name?"
       
    },
    {
        type: 'input',
        name: 'lastName',
        message: "What is the Employees last name?"
     
    },
    {  type: 'list',
       name: 'role',
       message: "What is the Employees role?",
       choices: [ 'Lawyer', 'Engineer', 'Client Relations', 'Distribution']
    },
    {  type: 'list',
       name: 'manager',
        message: "Who is the Employees manager?",
        choices: [ 'Ronald Firbank', 'Rick Astley', 'Tony Soprano', 'None']
   
    }
]

const updateEmp = [
    {
        type: 'number',
        name: 'empId',
        message: 'Type the number that corresponds to the employee you are trying to update:'  
    },
    {
        type: 'list',
        name: 'roleName',
        message: "Choose what the employee's new role will be:",
        choices: ['Lawyer', 'Engineer', 'Client Relations', 'Distribution']
    }
]

const newRole = [
    {
      type: 'input',
      name: 'name',
      message: "What is Role id?"
    },
    {
      type: 'list',
      name: 'department',
      message: "?",
      choices: []
    },

   {
      type: 'number',
      name: 'salary',
      message: "?"
  
  }
]

const newDep = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Department's name?",
     
    }   
]



module.exports = {
    trackerPrompt,
    nextChoice,
    updateEmp,
    newDep,
    newRole
}



