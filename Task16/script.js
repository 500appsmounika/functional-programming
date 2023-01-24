const squareList = arr => {
 
    return arr.filter(item=>item>0&&item%parseInt(item)==0).map(sum=>Math.pow(sum,2));
   
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  function getOutput(){
  document.getElementById("output").innerText=squaredIntegers;
  }