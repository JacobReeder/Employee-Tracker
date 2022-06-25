const trackerPrompt = {
 
   // return inquirer.prompt([
     //  {
           type: 'list',
           name: 'sample',
           message: 'Welcome to the Employee Tracker. What would you like to do?',
           choices: ['View All', 'View all Employees', 'View all Departments', 'View all Roles', 'Add an Employee', 'Add a Department', 'Add a Role']
       }   
//}

const nextChoice = [

//  if (this.choicesType === 'Add an Employee') {
  
        //   inquirer.prompt([
  
            {
                type: 'input',
                name: 'id',
                message: "What is the Employees ID?"
               // validate: employeeID => {
                //    if (employeeID) {
                 //       return true;
                 //   } else {
                 //       return false;
                 //   }
             //   }
            },
        
            {
          type: 'input',
          name: 'first_name',
          message: "What is the Employees first name?"
         // validate: firstName => {
          //    if(firstName) {
           //       return true;
           //   } else {
           //       return false;
        //  }
       // }
        },

        {
        type: 'input',
        name: 'last_name',
        message: "What is the Employees last name"
       // validate: lastName => {
        //    if(lastName) {
        //        return true;
        //    } else {
        //        return false;
      //  }
     // }
      },
        { type: 'input',
        name: 'role_id',
        message: "What is the Employees role ID?"
      //  validate: roleID => {
       //     if(roleID) {
      //          return true;
       //     } else {
       //         return false;
       // }
     // }
      },

       { type: 'input',
        name: 'manager_id',
        message: "What is the Employees manager ID?"
      //  validate: managerID => {
       //     if(managerID) {
        //        return true;
        //    } else {
        //        return false;
      //  }
    //  }
      }
]
        
  
    //  ])
  
     //  .then(answers => {
     //      this.newEmployee = new Employee(answers); ///Will this still be necessary? Will I have to create objects?
     //      this.Employee.push(this.newEmployee);
     //      this.newTeamMember();

    //   });

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


   //   } else if (this.choicesType === 'Add a Department') {

    //    inguirer
    //    .prompt([

const newDep = [

          {
            type: 'input',
            name: 'department_name',
            message: "What is the Department's name?",
      //      validate: departmentName => {
      //        if (departmentName) {
      //          return true;
      //        } else {
      //          console.log("Please enter your Department's name");
      //          return false;
      //        }
      //      }
          },
          {
            type: 'input',
            name: 'id',
            message: "What is the Department's ID?",
        //    validate: departmentID => {
         //     if (departmentID) {
         //       return true;
        //      } else {
         //       console.log("Please enter your Department's ID");
        //        return false;
        //    }
        //  }
        }
    //  ])
    //  .then(answers => {
    //    this.newDepartment = new Department(answers);
    //    this.department.push(this.newDepartment);
    //    this.newTeamMember();
    ////  });
    
]

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


//} else if (this.choicesType === 'Add a Role') {

 // inguirer
 // .prompt([
const newRole = [
    {
      type: 'input',
      name: 'id',
      message: "What is Role id?"
     // validate: roleId => {
      //  if (roleId) {
      //    return true;
      //  } else {
      //    console.log("Please enter your Department's name");
      //    return false;
      //  }
     // }
    },
    {
      type: 'input',
      name: 'title',
      message: "?"
     // validate: departmentID => {
     //   if (departmentID) {
      //    return true;
      //  } else {
      //    console.log("Please enter your Department's ID");
      //    return false;
    //  }
  //  }
  },
  {
      type: 'input',
      name: 'salary',
      message: "?"
    //  validate: departmentID => {
     //   if (departmentID) {
     //     return true;
     //   } else {
     //     console.log("Please enter your Department's ID");
      //    return false;
    //  }
  //  }
  }
]

module.exports = {
    trackerPrompt,
    nextChoice,
    newDep,
    newRole
}
//.then(answers => {
//  this.newRole = new Role(answers);
//  this.Role.push(this.Role);
 //// this.newTeamMember();
//});

//} else {

//}

//}

     /* newTeamMember() {

        inquirer
        .prompt([
          {
            type: 'confirm',
            name: 'newEmployee',
            message: 'Would you like to add another employee?',
            default: false
          }
        ])*/














        /*
         .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });

      }*/




