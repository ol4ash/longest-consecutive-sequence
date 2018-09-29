module.exports = function longestConsecutiveLength(array) {

let sum=0;
let total=0;
let arrayTest=array;

arrayTest.sort(function(a,b){return a - b})

let len=arrayTest.length;

if (len===1) total =1;

if (len==0) total =0;

if (len>1) {
for (var i=0; i<len; i++) {

	if (arrayTest[1]-arrayTest[0]===1){
  		sum=sum+1; 
  	
  	if (sum>total) total=sum;
	
	arrayTest.splice(0,1)
	}
	
	else if (arrayTest[1]-arrayTest[0]===0){
  		arrayTest.splice(0,1)
	}

	else if (arrayTest[1]-arrayTest[0]>1){
  		sum = 0;
  		arrayTest.splice(0,1)
	}
}
total++;
}

return total;
}
