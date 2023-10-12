
/*function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {
    let lab = labs[i];
    let result = lab.runLab(3);
    console.log(`${lab.student} code worked: ${result === 27}`);
  }
}

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

gradeLabs(studentLabs);
*/
function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {
      let lab = labs[i];
      let result = lab.runLab(3);
      console.log(`${lab.student} code worked: ${result === 27}`);
  }
let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];
try {
  console.log('Property is not defined');
}
catch(err){
  console.log("ERROR THROWN");
}
  
gradeLabs(studentLabs2);

  
}
