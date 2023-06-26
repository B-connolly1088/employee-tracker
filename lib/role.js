class Role {

    constructor(query) {

        this.query = query

    }
    async get(callback) {
        const results = await this.query("SELECT * FROM role")
    console.table(results);
    await callback();
    }

   async create(init, inquirer, questions) {
    const results = await this.query("SELECT name, id AS value FROM department");
    const answers = await inquirer.prompt(questions(results));
    await this.query(`INSERT INTO role(department_id, title, salary) VALUES (${answers.department_id}, "${answers.title}", ${answers.salary})`);
    await init();
   }





};


module.exports = Role;