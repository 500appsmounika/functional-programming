function nonMutatingSplice(cities) {
  
    return cities.slice(0,3);
  
   
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  function getOutput(){
  document.getElementById("output").innerText=nonMutatingSplice(inputCities);
  }