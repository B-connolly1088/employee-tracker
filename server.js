require("dotenv").config()
const questions = require("./lib/questions");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const util = require("util");
const Dpt = require("./lib/dpt");
const Employee = require("./lib/employee");
const Role = require("./lib/role");




const db = mysql.createConnection(
    {
      host: process.env.HOST,
      user: process.env.DBUSER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    },
    console.log(`Connected to the classlist_db database.`)
  );
  const query = util.promisify(db.query).bind(db);


async function init() {
    const ans = await inquirer.prompt(questions.mainQuestion)
    console.log(ans);
    // const addEmpAns = await inquirer.prompt(questions.addEmpQ)
    // console.log(addEmpAns);
    // const addEmpRollAns = await inquirer.prompt(questions.addEmpRollAns)
    // console.log(addEmpRollAns);
    // const updateEmpRollAns = await inquirer.prompt(questions.updateEmpRollQ)
    // console.log(questions.updateEmpRollAns)


    // const results = await query("SELECT * FROM department")
    // console.table(results);
    const dpt = new Dpt(query);
    const role = new Role(query);
    const emp = new Employee(query);

    switch (ans.choice) {
        case "view all departments":
            await dpt.get(init);
            break;
            case "view all roles":
            await role.get(init);
            break;
            case "view all employees":
            await emp.get(init);
            break;
            case "add a department":
            await dpt.create(init, inquirer, questions.addDptQ);
            break;
            case "add a role":
            await role.create(init, inquirer, questions.addRoleQ);
            break;
            case "add an employee":
            await emp.create(init, inquirer, questions.addEmpQ);
            break;
            case "update an employee role":
            await emp.update(init, inquirer, questions.updateEmpRollQ);
            break;
        default:
            break;
    }
    
}



init();