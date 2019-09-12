var lsit = ["#first","#second","#third","#fourth"];
var i =0;
function abcd1(event){
	event.preventDefault();
	var y = event.deltaY;
	console.log(y);
	if(y>0 )
	{	i++;
		if(i<=3){
			window.location.href = lsit[i];
		}
		else
			i=3;
		
	}
	else
	{
		i--;
		if(i>=0)
			window.location.href = lsit[i];
		else
			i=0;
	}
}
const abcd = document.querySelector("#abcd")
abcd.addEventListener('wheel',abcd1);
