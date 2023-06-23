class Dpt {

    constructor(query) {

        this.query = query

    }
    async get(callback) {
        const results = await this.query("SELECT * FROM department")
    console.table(results);
    await callback()
    }

    create() {

    }


}

module.exports = Dpt;