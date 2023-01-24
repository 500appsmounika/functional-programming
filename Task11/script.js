function sliceArray(anim, beginSlice, endSlice) {
 
    return anim.slice(beginSlice,endSlice);
    
      
    }
    
    const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

    function getOutput(){
        
    document.getElementById("output").innerText=sliceArray(inputAnim, 1, 3);
    }