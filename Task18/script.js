const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  
let arr1=[...arr];
return arr1.sort((a,b)=>a-b);

}
function getOutput(){
    document.getElementById("output").innerText=nonMutatingSort(globalArray);
}