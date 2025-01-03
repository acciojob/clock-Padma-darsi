//your JS code here. If required.
let timerdisplay=document.getElementById("timer");
let currentDate=new Date();

setInterval
(
	function()
		{
			currentDate=new Date();
			timerdisplay.innerHTML=currentDate.toLocaleString();
			
        },1000
)