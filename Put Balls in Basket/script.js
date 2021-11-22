let color = [
	"red",
	"blue",
	"yellow",
	"lightgrey",
	"darkorchid",
	"black",
	"orange",
	"deeppink",
	"green",
	"purple",
	"saddlebrown",
	"lightseagreen",
	"deepskyblue",
	"firebrick",
	"crimson",
];

let totalBall = 0;
let bottomD = 0;
let leftD = $(".ball").width();

$(".add-ball").click(function (e) {
	let index = Math.floor(Math.random() * color.length);
	console.log(leftD);
});
