function urlSlug(title) {

   
    return title.trim().split(/[ ,-.]+/).join("-").toLowerCase();
    
    }
   
   
    function getOutput(){
        document.getElementById("output").innerText= urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
    }