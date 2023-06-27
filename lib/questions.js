module.exports = {
  mainQuestion: [
    //first question goes here
    {
      type: "list",
      message: "What would you like to do?",
      name: "choice",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
      ],
    },
  ],
  addDptQ: [
    {
        type: "input",
        message: "What is your new department name?",
        name: "name",
    }
  ],
  addRoleQ: (choices) => [
    {
        type: "list",
        message: "What roll would you like to add?",
        name: "department_id",
        choices,
    },
    {
        type: "input",
        message: "Which role would you like to add?",
        name: "title",        
    },
    {
        type: "input",
        message: "What is the desired salary youd like to add?",
        name: "salary",
    },

  ],

  addEmpQ: (roles, managers) => [
    {
        type: "input",
        message: "What is the new employee's first name?",
        name: "first_name",
    },
    {
        type: "input",
        message: "What is the new employee's last name?",
        name: "last_name",
    },
    {
        type: "list",
        message: "What is the new employee role?",
        name: "role_id",
        choices: roles,
    },
    {
        type: "list",
        message: "Who is the new employee's manager?",
        name: "manager_id",
        choices: [...managers, {name:"none", value: null}],
    },
  ],

  updateEmpRollQ: (employee, roles) => [
    {
        type: "list",
        message: "What employee are you updating?",
        name: "employee",
        choices: employee,
    },
    {
        type: "list",
        message: "What would you like to adjust employee role to?",
        name: "role",
        choices: roles,
    },


  ],
};




// [
//     "HR Manager",
//     "HR Assistant",
//     "Millworks Manager",
//     "Millworks Assistant",
//     "Garden Manager",
//     "Garden Assistant",
// ]