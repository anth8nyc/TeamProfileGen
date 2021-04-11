const Engineer = require("../lib/Engineer");

describe('Engineer', () => {

    // Name
    it('should return a name when I pass a name to engineer', () =>{

        // Arranging and Acting
        let newEngineer = new Engineer("Sara", "222333", "castillo@gmail.com", "anth8nyc")
        //Assert
        expect(newEngineer.empName).toBe("Sara")

    });

    // id
    it('should return an ID when I pass an ID to engineer', () =>{

        //Arrange/Acting
        let newEngineer = new Engineer ("Sara", "222333", "castillo@gmail.com", "anth8nyc");
        //Assert
        expect(newEngineer.id).toBe("222333")

    });
    
    // email
    it('should return an email when I pass an email to engineer', () =>{

        //Arrange/Acting
        let newEngineer = new Engineer ("Sara", "222333", "castillo@gmail.com", "anth8nyc");
        //Assert
        expect(newEngineer.email).toBe("castillo@gmail.com")

    });
    
    // github
    it('should return a github account when I pass a github account to engineer', () =>{

        //Arrange/Acting
        let newEngineer = new Engineer ("Sara", "222333", "castillo@gmail.com", "anth8nyc");
        //Assert
        expect(newEngineer.github).toBe("anth8nyc")

    });
    
    // getName()
    describe("getName", () => {
       
        it("should return the name of the engineer", () => {

          expect(new Engineer("Sara", "222333", "castillo@gmail.com", "anth8nyc").getName()).toBe("Sara");
        });
       

    });
    
    // getId()
    describe("getId", () => {
       
        it("should get the Id of the engineer", () => {
            
          expect(new Engineer("Sara", "222333", "castillo@gmail.com", "anth8nyc").getId()).toBe("222333");
        });
       

    });
    
    // getEmail()
    describe("getEmail", () => {
       
        it("should get the email of the engineer", () => {
            
          expect(new Engineer ("Sara", "222333", "castillo@gmail.com", "anth8nyc").getEmail()).toBe("castillo@gmail.com");
        });
       

    });
    
    // getRole()—returns 'Engineer'
    describe("getRole", () => {
       
        it("should return the employee role as Engineer", () => {
            
          expect(new Engineer ("Sara", "222333", "castillo@gmail.com", "anth8nyc").getRole()).toBe("Engineer");
        });
       
    });
    
    // getGithub()—returns github account
    describe("getGithub", () => {
       
        it("should return the engineer's github account", () => {
            
          expect(new Engineer ("Sara", "222333", "castillo@gmail.com", "anth8nyc").getGithub()).toBe("anth8nyc");
        });
       
    });
    
})