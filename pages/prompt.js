

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
        name: 'first_name',
        message: "What is the Employees first name?"
       
    },
    {
        type: 'input',
        name: 'last_name',
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
      message: "New role name?"
    },
    ,

   {
      type: 'number',
      name: 'salary',
      message: "What is the salary of the new role?"
  
    },
    {
      type: 'list',
      name: 'department',
      message: "Which department?",
      choices: ['Lawyer', 'Engineer', 'Client Relations', 'Distribution']
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



