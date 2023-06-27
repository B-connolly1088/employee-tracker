const db = require("../server");

class Employee {

    constructor(query) {

        this.query = query

    }
    async get(callback) {
        const results = await this.query("SELECT * FROM employee")
    console.table(results);
    await callback();
    }
    

    
   async create(init, inquirer, questions) {
    const roles = await this.query("SELECT title AS name, id AS value FROM role");
    const managers = await this.query(`SELECT CONCAT(first_name, " ", last_name) AS name, id AS value FROM employee WHERE manager_id IS null`);
    const answers = await inquirer.prompt(questions(roles, managers));
    // console.log(answers);
    await this.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("${answers.first_name}", "${answers.last_name}", ${answers.role_id}, ${answers.manager_id})`);
    // await init();
    this.get(init);
   }

    async update(init, inquirer, questions) {
        
        const employees = await this.query(`SELECT CONCAT(first_name, " ", last_name) AS name, id AS value FROM employee`);
        const roles = await this.query("SELECT title AS name, id AS value FROM role");
        // console.table(employees);
        const answers = await inquirer.prompt(questions(employees, roles));
        // console.log(answers);
        await this.query(`UPDATE employee
        SET role_id = ${answers.role}
        WHERE id = ${answers.employee};`);
        this.get(init);
    }

    

};


module.exports = Employee;