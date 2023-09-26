console.log(squareStar(5));

function squareStar(size){
let star = ""; 
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            star = star + "*";
           
 //console.log("*");
        }
        j = 0;
        
    
    console.log(star);
    star = "";
 //   console.log("\n");
}
}
squareStar();