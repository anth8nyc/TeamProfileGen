const Employee = require("../lib/Employee");

describe('Employee', () => {

    // Name
    it('should return a name when I pass a name to employee', () =>{

        // Arranging and Acting
        let newEmployee = new Employee("Anthony", "096171", "acastcard@gmail.com")
        //Assert
        expect(newEmployee.empName).toBe("Anthony")

    });

    // id
    it('should return an ID when I pass an ID to employee', () =>{

        //Arrange/Acting
        let newEmployee = new Employee ("Anthony", "096171", "acastcard@gmail.com");
        //Assert
        expect(newEmployee.id).toBe("096171")

    });
    
    // email

    it('should return an email when I pass an email to employee', () =>{

        //Arrange/Acting
        let newEmployee = new Employee ("Anthony", "096171", "acastcard@gmail.com");
        //Assert
        expect(newEmployee.email).toBe("acastcard@gmail.com")

    });
    


    // getName()
    
    
    // getId()
    
    // getEmail()
    
    // getRole()—returns 'Employee'



})