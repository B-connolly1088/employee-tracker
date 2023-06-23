class Role {

    constructor(query) {

        this.query = query

    }
    async get(callback) {
        const results = await this.query("SELECT * FROM role")
    console.table(results);
    await callback()
    }

    create() {

    }



};


module.exports = Role;