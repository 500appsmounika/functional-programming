// The global variable
let fixedValue = 4;
function incrementer(fixedValue) {

return fixedValue+1;

}

function getOutput(){

    document.getElementById("output").innerText=incrementer(fixedValue);

}