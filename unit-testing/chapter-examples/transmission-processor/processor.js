function processor(transmission) {
 
      if (transmission.indexOf("::") < 0) {
      //   Data is invalid
        return -1;
     }

       let parts = transmission.split("::");
       let rawData = parts[1];
       str1 = parts[1];
       strlength = str1.length;
       console.log(strlength);
       console.log(str1);
       if (str1[0] !== "<" || str1[strlength-1] !== ">") {
        rawData = -1;
        console.log("here2");
     }
     else {
        str1 = (str1.slice(1,strlength-1));
        if (isNaN(str1)) {
            rawData = -1;
            console.log ("here");
        } else {

        rawData = str1;
        console.log(str1);
        }
     }
      return {
         id: Number(parts[0]),
         rawData: rawData
       
        };
     }
  
     console.log (processor("9701::<487297403495720912>"));

     module.exports = processor;