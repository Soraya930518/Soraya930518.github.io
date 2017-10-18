console.log("hello"); 
console.log(2+5);
console.log(Math.random()*100);
if (5>4) {
	console.log("it is true");
}
else { 
	console.log("it is false");
 }

 function printApples(unknown) {
 	while (unknown<15) {
 		console.log("I Have an apple"); 
 		unknown+=1; 
 	}

 }


document.getElementById("Dreams").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("Dreams").innerHTML = "SAVED IN SPACE";
}


