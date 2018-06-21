function start(){
    var current = new Date(); 
    document.getElementById("stringsPara").innerHTML = 
    "<h2>String representation and valueoOf </h2>" + 
    "<p>toString: " + current.toString() + "</p>" + 
    "<p>toLocaleString: " + current.toLocaleString() + "</p>"+
    "<p>toUTCString: "+ current.toUTCString() + "</p>" + 
    "<p>valueOf: " + current.valueOf() + "</p>" ;

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
    "<p>getTiemzoneOffset: " + current.getTimezoneOffset() + "</p>" 
    
    var examDate = new Date(2018, 09, 21, 12, 30, 00, 00 );
    document.getElementById("anotherDatePara").innerHTML = 
    "<h2>Specifying arguments for new Date</h2>" + 
    "<p>Date: "+ anotherDate + "</p>";    

    anotherDate.setDate( 10 );
    anotherDate.setMonth(11);
    anotherDate.setFullYear(2016);
    anotherDate.setHours( 23 );
    anotherDate.setMinutes( 59 );
    anotherDate.setSeconds( 59 );
    document.getElementById( "setMethodsPara").innerHTML = 
    "<h2> Set methods for local rime zone</h2>" + 
    "<p>Modified date: " + anotherDate + "</p>";
}

window.addEventListener("load",start,false);