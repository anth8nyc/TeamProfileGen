const Employee = require("./Employee");

class Engineer extends Employee {
    
    constructor(name, id, email, github){

        super(name, id, email)
        this.github = github

    }

    getGithub(){
        return github
    }

    //Overwriting default employee role
    getRole(){
        return "Engineer"
    }

}

module.exports = Engineer;