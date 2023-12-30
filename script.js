let clearBtn=document.getElementById("clear");
let display=document.getElementById("display");
let calculateResult=document.getElementById("equal");



function appendToDisplay(value){
	display.value+=value;
}

clearBtn.onclick=function(){
	display.value="";
};

calculateResult.onclick=function(){
	try{
		display.value=eval(display.value);
	}
	catch(error){
		display.value="Error";
	}
};


	