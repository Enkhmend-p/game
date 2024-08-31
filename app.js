// for loop -> davtalt
for(var i=1; i<=10; i++){
	console.log("hello"+i);
}
// i=1 -> 1<=10 -> true -> hello1 ->2
// i=2 -> 2<=10 -> true -> hello2 ->3
// i=11> 11<=10 -> false -> stop
for(var i=10; i>=1; i--){
	console.log("hello"+i);
}
for(var i=1; i<=20; i++){
	if(i%2==0){
		console.log(i)
	}
	else{
		console.log()
}
}
for(var i=1; i<=30; i++){
	if(i%3==0 && i%5==0){
		console.log(i)
	}
}
var too=5;
for(var i=1; i<=10; i++){
		console.log((too+" x "+ i)+"="+(i*5));
}
var niilber=0;
var urjver=1;
for(var i=1; i<=10; i++){
	niilber = niilber+i;
	urjver = urjver*i;
}
console.log(niilber);
console.log(urjver);
var random= Math.floor(Math.random()*10)+1;
console.log(random);
for(var i=1; i<=3; i++){
	var myNumber = +prompt("1-10 hurtelh too taanuu");
	if(random==myNumber){
		alert("ta yllaa");
		alert("ta "+i +" dahi oroldgodoo yllaa")
		break;
	}
	else if(random>myNumber){
		alert("baga baina")
	}
	else if(random<myNumber){
		alert("ih baina")
	}
	else{
		console.log("ta ylagdlaa");
	}
	if(i==3){
		alert("you lose")
	}
}