const params = new URLSearchParams(window.location.search)
var arr = [];
var i=0;
for (const param of params) {
  arr[i] = param[1];
  i++;
}

var shoploc = document.querySelector("#shoploc");
if(arr[2])
{
	shoploc.setAttribute("placeholder", arr[2]);
}
else {
	shoploc.setAttribute("placeholder", "set shop location");
}