function alphabeticalOrder(arr) {
    
  
    return arr.sort();
    
  }
  

  function getOutput(){
    document.getElementById("output").innerText= alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
  }