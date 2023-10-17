const hello = require('../hello.js');

describe("hello world test", function(){

      test("should return a custom message when name is specified", function(){
         expect(hello("Jest")).toBe("Hello, Jest!");
      });

      it("should return a general greeting when name is not specified", function(){
        expect(hello()).toBe("Hello, World!");
    });

<<<<<<< HEAD
});

/*
function doStringsMatch(string1, string2){
  if (string1 === string2) {
     return 'Strings match!';
  } else {
     return 'No match!';
  }
}
//expect(doStringsMatch('Flower', 'Flower')).toBe('Strings match!');
expect(doStringsMatch('Flower', 'flower')).toBe('No match!');
//expect(doStringsMatch('Flower', 'plant')).toBe('No match!');
//expect(doStringsMatch('Flower', '')).toBe('No match!');
*/
=======
});
>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32
