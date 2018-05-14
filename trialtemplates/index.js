$(document).ready(function(){
var ar='BLAH blah blah blah jdjd';
var i=0;
var ne="";
$('button').on('click',typewriter);
function typewriter()
{if (i<ar.length)
{   ne=ne+ar.charAt(i)
    $('.try').text(ne);
    i++;
    setTimeout(typewriter,50);
}
}
});