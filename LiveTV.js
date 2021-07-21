<!-- 
var message=""; 
function clickIE() {if (document.all) {(message);return false;}} 
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) { 
if (e.which==2||e.which==3) {(message);return false;}}} 
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;} 
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;} 
document.oncontextmenu=new Function("return false") 
// --> 
</script> 
<script language="JavaScript1.2"> 
function disabletextselect(i){ 
return false 
} 
function renabletextselect(){ 
return true 
} 
//if IE4+ 
document.onselectstart=new Function ("return false") 
//if NS6+ 
if (window.sidebar){ 
document.onmousedown=disabletextselect 
document.onclick=renabletextselect 
} 
