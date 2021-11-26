console.log(varName);
var varName;
fn();
function fn() {
	console.log("code is running");
}
varName = 20;
console.log(varName);
// fnName();

var fnName = function () {
	console.log("Function expression");
};
fnName();
