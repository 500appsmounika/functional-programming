function sentensify(str) {
    if(str.includes(".")){
      return str.split(".").join(" ");}
      else if(str.includes("-")){
      return str.split("-").join(" ");}
        else if(str.includes(",")){
    
          return str.split(",").join(" ");}
      
  }
  function getOutput(){
  document.getElementById("output").innerText=sentensify("May-the-force-be-with-you");
  }