    function togglecp(){
        var cp = document.getElementById("cp");
        cp.style.height = window.innerHeight - 60+"px";
        if(cp.style.right == "0px") {
            cp.style.right == "-260px";
         } else {
            cp.style.right == "0px";
        }    
        }
        for (var i = 0; i <40; i++){document.write("<h2>"+(i+1)+" .dummy page content .....</h2>");}
                