var btns = document.querySelectorAll(".container p a");
var signupBox = document.querySelector("#osignup");
var loginBox = document.querySelector("#ologin");
// console.log(btns);

for(var i=0;i<btns.length;i++)
{
	btns[i].addEventListener("click",function(){
			signupBox.classList.toggle("d-none");
			loginBox.classList.toggle("d-none");
			
	});
};