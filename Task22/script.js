function checkPositive(arr) {
    return arr.every(item=>item>0);
   }
  
    function getOutput(){
document.getElementById("output").textContent=  checkPositive([1, 2, 3, -4, 5]);
    }