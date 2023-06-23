const db = require("../server");

class Role {


    constructor(id, title, salary, department_id) {

        this.id = id;//need function to acces data from table
        this.title = title;//need function to acces data from table
        this.salary = salary;//need function to acces data from table
        this.department_id = department_id;//need function to acces data from table

    }

    getRole(id) {

    }

    getRoleId(title) {

    }

    getRoleSalary(salary) {

    }

    geRoletDepartmentId(department_id) {

    }


};


module.exports = Role;