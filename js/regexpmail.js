$(document).ready(function() {
    console.log( "document ready!" );




var myexp = /([a-z0-9_-]*)@sivers.org/i;
var str ="My email is derek@sivers.org but no spam, ok?";
var matches = myexp.exec(str);
var rez="the whole thing is " + matches[0] + " and username is " + matches[1];
console.log(matches);
console.log(rez);

$("#mydiv").html(matches);
$("#mydiv2").html(rez);


});