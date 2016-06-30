// exercise.js

var numbers = "80:70:90:100";
var res = numbers.split(":");
var sum = 0;

for (var i = 0; i < res.length; i++){
	
	
	sum += parseInt(res[i]);

}

// var avg = sum/res.length;
var average = (sum / res.length);
console.log(average);
// averageColon(numbers);
