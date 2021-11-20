let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let randomChosenColour = 0;
let level = 0;

let started = false;

$(".btn").on("click", function (e) {
	let userChosenColour = $(this).attr("id");
	userClickedPattern.push(userChosenColour);
	playSound(userClickedPattern);
});

function nextSequence() {
	level++;
	$("#level-title").html("Level " + level);
	let randomNumber = Math.floor(Math.random() * 4);
	randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomNumber);

	$("#" + randomChosenColour)
		.fadeOut(100)
		.fadeIn(100)
		.fadeOut(100)
		.fadeIn(100);
	playSound(userClickedPattern);
}

function playSound(name) {
	let audio = new Audio(`sounds/${name}.mp3`);
	audio.play();
}

function animatePress(currentColour) {
	$("#" + currentColour).addClass("pressed");

	setTimeout(function () {
		$("#" + currentColour).removeClass("pressed");
	}, 100);
}

$(window).on("keydown", function (e) {
	if (e.key === "a" || e.key === "A") {
		$("#level-title").html("Level " + level);
	}
});
