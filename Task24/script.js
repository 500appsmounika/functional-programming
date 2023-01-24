function add(x) {
  
    return function(y){
        return function(z){
           return x+y+z;
             }
    
         }
    }
    function getOutput(){
   document.getElementById("output").innerText= add(10)(20)(30);
    }