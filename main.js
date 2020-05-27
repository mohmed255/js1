var start = document.getElementById("start"),
    
    end = document.getElementById("end"),
    
    send = document.getElementById("send");

send.onclick = function () {
    
    "use strict";
    
    var years;
    
    document.write("<select>");
    
    for (years = start.value; years <= end.value; years++) {
        
        document.write("<option value=\"" + years + "\">" + years + "</option>");
        
    }
    
    document.write("</select>");
    
}