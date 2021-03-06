const Employee = require("./Employee");

class Manager extends Employee {
    
    constructor(name, id, email, office){

        super(name, id, email)
        this.office = office

    }

    //Overwriting default employee role
    getRole(){
        return "Manager"
    }

}

module.exports = Manager;