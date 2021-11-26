console.log(varName); //un

var varName = 10;

function b() {
	console.log(varName);//10
}

console.log(varName); //10

function fn() {
	console.log(varName);//un
	var varName = 20;
	b();
	console.log(varName);//20
}
fn();
