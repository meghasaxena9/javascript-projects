// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.
<<<<<<< HEAD
/*
class Astronaut {
   constructor(name, age, mass = 120){
=======

class Astronaut {
   constructor(name, age, mass){
>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let tortoise = new Astronaut('Speedy', 120);

console.log(tortoise.name, tortoise.age, tortoise.mass);

<<<<<<< HEAD
// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!
*/

class Car {
  constructor (make, model, year, color, mpg) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
  }

}
//let myCar = new Car('Chevy', 'Astro', 1985, 'gray', 20);
//console.log(typeof myCar.year);

let myCar = new Car('Tesla', 'Model S', 2019);
console.log(myCar);
=======
// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!
>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32
