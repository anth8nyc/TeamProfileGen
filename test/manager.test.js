const Manager = require("../lib/Manager");

describe('Manager', () => {

    // Name
    it('should return a name when I pass a name to Manager', () =>{

        // Arranging and Acting
        let newManager = new Manager("Christina", "213128", "cvvin@gmail.com", "7134")
        //Assert
        expect(newManager.empName).toBe("Christina")

    });

    // Id
    it('should return an ID when I pass an ID to Manager', () =>{

        //Arrange/Acting
        let newManager = new Manager ("Christina", "213128", "cvvin@gmail.com", "7134");
        //Assert
        expect(newManager.id).toBe("213128")

    });
    
    // Email
    it('should return an email when I pass an email to Manager', () =>{

        //Arrange/Acting
        let newManager = new Manager ("Christina", "213128", "cvvin@gmail.com", "7134");
        //Assert
        expect(newManager.email).toBe("cvvin@gmail.com")

    });
    
    // Office
    it('should return an office number when I pass an office number to Manager', () =>{

        //Arrange/Acting
        let newManager = new Manager ("Christina", "213128", "cvvin@gmail.com", "7134");
        //Assert
        expect(newManager.office).toBe("7134")

    });
    
    // getName()
    describe("getName", () => {
       
        it("should return the name of the Manager", () => {

          expect(new Manager("Christina", "213128", "cvvin@gmail.com", "7134").getName()).toBe("Christina");
        });
       

    });
    
    // getId()
    describe("getId", () => {
       
        it("should get the Id of the Manager", () => {
            
          expect(new Manager("Christina", "213128", "cvvin@gmail.com", "7134").getId()).toBe("213128");
        });
       

    });
    
    // getEmail()
    describe("getEmail", () => {
       
        it("should get the email of the Manager", () => {
            
          expect(new Manager ("Christina", "213128", "cvvin@gmail.com", "7134").getEmail()).toBe("cvvin@gmail.com");
        });
       

    });
    
    // getRole()—returns 'Manager'
    describe("getRole", () => {
       
        it("should return the employee role as Manager", () => {
            
          expect(new Manager ("Christina", "213128", "cvvin@gmail.com", "7134").getRole()).toBe("Manager");
        });
       
    });
    
})