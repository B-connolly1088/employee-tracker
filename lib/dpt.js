class Dpt {

    constructor(query) {

        this.query = query

    }
    async get(callback) {
        const results = await this.query("SELECT * FROM department")
    console.table(results);
    await callback()
    }

    async create(init, inquirer, questions) {

        const answers = await inquirer.prompt(questions);
        console.log(answers);
        await this.query(`INSERT INTO department(name) VALUES ("${answers.name}")`);
        await init();
       }


    


}

module.exports = Dpt;