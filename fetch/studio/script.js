//TODO: Add Your Code Below

        
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    response.json().then(function(){

      console.log(json);
      const container = document.getElementById["container"];
      astronauts = "";
      for (let i =0; i<json.length; i++){
        astronauts += `<div class = "astronauts">
          <div class = "bio">
            <h3> $ {json[i].firstName} ${json[i].lastName}</h3>
            <ul>
            <li>Hours in space: ${json[i].hoursInSpace}</li>
            <li>Active : ${json[i].active}</li>
            <li>skills: ${json[i].skills}</li>
            </ul>
          </div>
        <img class = "avatar" src = "${json[i].picture}">
        </div>`
      }

        console.log(json.sort())
        dispatchEvent.innerHTML = result;

      })
  });

    });