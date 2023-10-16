const whoWon = require('../RPS.js');

describe("RPS test", function() {

    
    test("both player use same value", function() {
     let result = whoWon("rock", "rock");
     expect(result).toBe("TIE!");
 
 
      });

      test("both player use different value", function() {
        let result = whoWon("rock", "paper");
        expect(result).toBe("Player 2 wins!");
    
    
         });

         test("both player use different value", function() {
            let result = whoWon("scissor", "paper");
            expect(result).toBe("Player 1 wins!");
        
        
             });

             test("both player use different value other than RPS", function() {
                let result = whoWon("sciss", "pap");
                expect(result).toBe("Player 1 wins!");
            
            
                 });

    });
 