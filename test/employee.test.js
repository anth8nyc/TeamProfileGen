const Employee = require("../lib/employee");

describe('employee', () => {

    // Name
    it('should return a name when I pass a name to employee', () =>{

        //Arrange
        let employeeName = "Anthony";
        //Act
        let newEmployee = new Employee (employeeName);
        //Assert
        expect(newEmployee.name).toBe("Anthony")
    });

    // id
    
    // email
    
    // getName()
    
    // getId()
    
    // getEmail()
    
    // getRole()—returns 'Employee'












})