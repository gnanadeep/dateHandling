function start(){
    var currnet = new Date(); 
    document.getElementById("stringPara").innerHTML = 
    "<h2>String representation and valueoOf </h2>" + 
    "<p>toString: " + currnet.toString() + "</p>" + 
    "<p>toLocaleString: " + currnet.toLocaleString() + "</p>"+
    "<p>toUTCString: "+ currnet.toUTCString() + "</p>" + 
    "<p>valueOf: " + current.valueOf() + "</p>";

    document.getElementById("getMethodsPara" ).innerHTML = 
    "<h2> get methods for local time zone</h2>" + 
    "<p>getDate: " + current.getDate() + "</p>" + 
    "<p>getDay: " + current.getDay() + "</p>" + 
    "<p>getMonth: " + current.getMonth() + "</p>" + 
    "<p>getFullYear: " + current.getFullYear() + "</p>" +
    "<p>getTime : (returns the number of milliseconds between midnight of January 1, 1970 and  the specified date.) " +
    current.getTime() + "</p>"  +
    "<p>getHours: " + current.getHours() + "</p>" +
    "<p>getMinutes: " + current.getMinutes() + "</p>" +
    "<p>getSeconds" + current.getSeconds() + "</p>" +
    "<p>getMilliseconds: " + current.getMilliseconds() + "</p>" +
    "<p>getTiemzoneOffset: " + current.getTimezoneOffset(); 
    
    var examDate = new Date(2018, 09, 21, 12, 30, 00, 00 );
    document.getElementById("anotherDatePara").innerHTML = 
    "<h2>Specifying arguments for new Date</h2>" + 
    "<p>Date: " + anotherDate + "</p>";    

}

window.addEventListener("load",start,false);