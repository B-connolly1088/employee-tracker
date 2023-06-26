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
    console.log(answers);
    await init();
   }

   



};


module.exports = Role;