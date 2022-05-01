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

    trackerPrompt() {

   
    return inquirer.prompt([
       {
           type: 'list',
           name: 'sample',
           message: 'Welcome to the Employee Tracker. What would you like to do?',
           choices: ['View All', 'View all Employees', 'View all Departments', 'View all Roles', 'Add an Employee', 'Add a Department', 'Add a Role']
       }
      ])

      .then(answers => {
        const {choicesType} = answers;
        this.choicesType = choicesType;
        this.nextChoice();
      });
    
}*/

//nextChoice() {

 /* if (this.choicesType === 'Add an Employee') {
  
           inquirer.prompt([
  
            {
                type: 'input',
                name: 'id',
                message: "What is the Employees ID?",
                validate: employeeID => {
                    if (employeeID) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
        
            {
          type: 'input',
          name: 'first_name',
          message: "What is the Employees first name?",
          validate: firstName => {
              if(firstName) {
                  return true;
              } else {
                  return false;
          }
        }
        },

        {
        type: 'input',
        name: 'last_name',
        message: "What is the Employees last name",
        validate: lastName => {
            if(lastName) {
                return true;
            } else {
                return false;
        }
      }
      },
        { type: 'input',
        name: 'role_id',
        message: "What is the Employees role ID?",
        validate: roleID => {
            if(roleID) {
                return true;
            } else {
                return false;
        }
      }
      },

       { type: 'input',
        name: 'manager_id',
        message: "What is the Employees manager ID?",
        validate: managerID => {
            if(managerID) {
                return true;
            } else {
                return false;
        }
      }
      },
        
  
      ])
  
       .then(answers => {
           this.newEmployee = new Employee(answers); ///Will this still be necessary? Will I have to create objects?
           this.Employee.push(this.newEmployee);
           this.newTeamMember();

       });

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


      } else if (this.choicesType === 'Add a Department') {

        inguirer
        .prompt([
          {
            type: 'input',
            name: department_name',
            message: "What is the Department's name?",
            validate: departmentName => {
              if (departmentName) {
                return true;
              } else {
                console.log("Please enter your Department's name");
                return false;
              }
            }
          }.
          {
            type: 'input',
            name: 'id',
            message: "What is the Department's ID?",
            validate: departmentID => {
              if (departmentID) {
                return true;
              } else {
                console.log("Please enter your Department's ID");
                return false;
            }
          }
        },
      ])
      .then(answers => {
        this.newDepartment = new Department(answers);
        this.department.push(this.newDepartment);
        this.newTeamMember();
      });
      
  
});*/

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/*
} else if (this.choicesType === 'Add a Role') {

  inguirer
  .prompt([
    {
      type: 'input',
      name: 'id',
      message: "What is Role id?",
      validate: roleId => {
        if (roleId) {
          return true;
        } else {
          console.log("Please enter your Department's name");
          return false;
        }
      }
    }.
    {
      type: 'input',
      name: 'title',
      message: "?",
      validate: departmentID => {
        if (departmentID) {
          return true;
        } else {
          console.log("Please enter your Department's ID");
          return false;
      }
    }
  },
  {
      type: 'input',
      name: 'salary',
      message: "?",
      validate: departmentID => {
        if (departmentID) {
          return true;
        } else {
          console.log("Please enter your Department's ID");
          return false;
      }
    }
  },
])
.then(answers => {
  this.newRole = new Role(answers);
  this.Role.push(this.Role);
  this.newTeamMember();
});

} else {

}

}

*/
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


///end of constructor//last prompt
/*newTeamMember() {

}*/

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




