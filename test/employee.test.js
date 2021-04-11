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
    describe("getName", () => {
       
        it("should return the name of the employee", () => {

          expect(new Employee("Anthony", "096171", "acastcard@gmail.com").getName()).toBe("Anthony");
        });
       

    });
    
    // getId()
    describe("getId", () => {
       
        it("should get the Id of the employee", () => {
            
          expect(new Employee("Anthony", "096171", "acastcard@gmail.com").getId()).toBe("096171");
        });
       

    });
    
    // getEmail()
    describe("getEmail", () => {
       
        it("should get the email of the employee", () => {
            
          expect(new Employee("Anthony", "096171", "acastcard@gmail.com").getEmail()).toBe("acastcard@gmail.com");
        });
       

    });
    
    // getRole()—returns 'Employee'
    describe("getRole", () => {
       
        it("should return the employee role as Employee", () => {
            
          expect(new Employee("Anthony", "096171", "acastcard@gmail.com").getRole()).toBe("Employee");
        });
       
    });
    
})