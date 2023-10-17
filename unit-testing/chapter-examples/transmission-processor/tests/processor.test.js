<<<<<<< HEAD
const processor = require('../processor.js');

describe("transmission processor", function() {

   //  TODO: put tests here
   test("takes a string returns an object", function() {
    let result = processor("1410::<932829840830053761>");
    expect(typeof result).toBe("object");


     });

    test("returns -1 if '::' not found", function() {
      let result = processor("9701<489584872710>");
      expect(result).toBe(-1);
    
    });

    test("return object contains id", function() {
      let result = processor("9701::<489584872710>");
      expect(result.id).toBe(9701);
    });

    test("returns rawData in object", function() {
      let result = processor("9701::<487297403495720912>");
      expect(result.rawData).not.toBeUndefined();
   });


   test("returns -1 if '<' missing " , function() {
    let result = processor("9701::487297403495720912>");
    expect(result.rawData).toBe(-1);
 });

 test("returns -1 if '>' is missing ", function() {
  let result = processor("9701::<487297403495720912");
  expect(result.rawData).toBe(-1);
});

test("returns -1 if rawdata is alphanumeric", function() {
  let result = processor("9701::<4872974034<95720912>");
  expect(result.rawData).toBe(-1);
});

   });
=======
describe("transmission processor", function() {

   //  TODO: put tests here
 
 });
>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32
