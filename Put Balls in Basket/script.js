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
let lineBall = 0;
let bottomD = 0;
let left = 0;
let height = 6;

let leftD = $(".ball").width();

$(".add-ball").click(function (e) {
	appendBall();
});

function appendBall() {
	if (totalBall == 15) {
		bottomD += 5;
		totalBall = 0;
		left = 0;
		height += 6;
		changeBasket();
	}
	console.log(totalBall);
	let index = Math.floor(Math.random() * color.length);

	let newE = $("<div></div>");
	newE.addClass("ball");
	newE.css({
		backgroundColor: color[index],
		bottom: bottomD + "rem",
		left: left + "rem",
	});
	left += 5;
	totalBall++;
	$(".basket").append(newE);
}

function changeBasket() {
	console.log("change");
	$(".basket").css({
		height: height + "rem",
		backgroundColor: "rgb(185, 236, 236)",
	});
}
