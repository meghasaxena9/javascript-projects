//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor (name, mass, scores) {
       //assign properties
    this.name = name;
    this.mass = mass;
    this.scores = scores;
    }

    addScore(newscore) {

        this.scores.push(newscore);
           return this.scores; 
       }
    average() {
        let totalscores = 0;
        let averagescores = 0;
        let i;
        for (i=0; i<this.scores.length; i++)
         {
            totalscores += Number(this.scores[i]);
         };
            averagescores = Math.ceil((totalscores/this.scores.length)*10)/10;
            return averagescores;     
    }
    status() {
     //   let candidateStatus = ['Accepted', 'Reserve', 'Probationary', 'Rejected'];
     //   let statusAvg = this.average;
        let string;
        console.log(this.average());
        if (this.average() > 90) {
            string = `${this.name} earned an average test score of ${this.average()}% and has a status of 'Accepted.'`
        } else {
            if (this.average() >= 80 && this.average() < 90){
            string = `${this.name} earned an average test score of ${this.average()}% and has a status of 'Reserved.'`
        
            } else {
                if (this.average() >= 70 && this.average() < 80){
                    string = `${this.name} earned an average test score of ${this.average()}% and has a status of 'Probationary.'`
                } else {
                        string = `${this.name} earned an average test score of ${this.average()}% and has a status of 'Rejected.'`
                    
                }
            }
        }
     return string;
        
       }

 

    }

let Bear = new CrewCandidate('Bubba Bear', '135 kg', [88, 85, 90]);

let Dog = new CrewCandidate('Merry Maltese', '1.5 kg', [93, 88, 97]);

let Gator = new CrewCandidate('Glad Gator', '225 kg', [75, 78, 62]);
  

//console.log(typeof Bear, typeof Dog);
console.log(Bear, Dog, Gator);


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Dog.addScore(77);
//console.log(Dog);

//Dog.average();
//console.log(Dog.average());
console.log(Bear.status());
console.log(Dog.status());
console.log(Gator.status());
Gator.addScore(99);
Gator.addScore(99);
Gator.addScore(99);
Gator.addScore(99);
Gator.addScore(99);
Gator.addScore(99);
Gator.addScore(99);
console.log(Gator);
console.log(Gator.status());
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.