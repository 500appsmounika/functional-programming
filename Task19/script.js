function splitify(str) {
    
  return str.split(/[ -.,]+/);
}
  function getOutput(){
  
  document.getElementById("output").innerText=splitify("Hello World,I-am code");
  }