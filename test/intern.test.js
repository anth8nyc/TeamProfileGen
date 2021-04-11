const Intern = require("../lib/Intern");

describe('Intern', () => {

    // Name
    it('should return a name when I pass a name to Intern', () =>{

        // Arranging and Acting
        let newIntern = new Intern("Ben", "444777", "ben@gmail.com", "UNT")
        //Assert
        expect(newIntern.empName).toBe("Ben")

    });

    // id
    it('should return an ID when I pass an ID to Intern', () =>{

        //Arrange/Acting
        let newIntern = new Intern ("Ben", "444777", "ben@gmail.com", "UNT");
        //Assert
        expect(newIntern.id).toBe("444777")

    });
    
    // email
    it('should return an email when I pass an email to Intern', () =>{

        //Arrange/Acting
        let newIntern = new Intern ("Ben", "444777", "ben@gmail.com", "UNT");
        //Assert
        expect(newIntern.email).toBe("ben@gmail.com")

    });
    
    // school
    it('should return a school when I pass a school to Intern', () =>{

        //Arrange/Acting
        let newIntern = new Intern ("Ben", "444777", "ben@gmail.com", "UNT");
        //Assert
        expect(newIntern.school).toBe("UNT")

    });
    
    // getName()
    describe("getName", () => {
       
        it("should return the name of the Intern", () => {

          expect(new Intern("Ben", "444777", "ben@gmail.com", "UNT").getName()).toBe("Ben");
        });
       

    });
    
    // getId()
    describe("getId", () => {
       
        it("should get the Id of the Intern", () => {
            
          expect(new Intern("Ben", "444777", "ben@gmail.com", "UNT").getId()).toBe("444777");
        });
       

    });
    
    // getEmail()
    describe("getEmail", () => {
       
        it("should get the email of the Intern", () => {
            
          expect(new Intern ("Ben", "444777", "ben@gmail.com", "UNT").getEmail()).toBe("ben@gmail.com");
        });
       

    });
    
    // getRole()—returns 'Intern'
    describe("getRole", () => {
       
        it("should return the employee role as Intern", () => {
            
          expect(new Intern ("Ben", "444777", "ben@gmail.com", "UNT").getRole()).toBe("Intern");
        });
       
    });
    
    // getSchool()—returns github account
    describe("getSchool", () => {
       
        it("should return the Intern's github account", () => {
            
          expect(new Intern ("Ben", "444777", "ben@gmail.com", "UNT").getSchool()).toBe("UNT");
        });
       
    });
    
})