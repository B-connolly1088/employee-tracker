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
        type: "list",
        message: "Which department would you like to add?",
        name: "choice",
        choices: [
            "HR",
            "Millworks",
            "Garden",
        ],
    },
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

  addEmpQ: [
    {
        type: "input",
        message: "Would you like to add a new employee?",
        name: "",
    }
  ],

  updateEmpRollQ: [
    {
        type: "list",
        message: "What roll would you like to add for an employee?",
        name: "choice",
        choices: [
            "HR Manager",
            "HR Assistant",
            "Millworks Manager",
            "Millworks Assistant",
            "Garden Manager",
            "Garden Assistant",
        ],
    },
  ],
};
