$("#para1").css("color", "red");

$("#para1").css("fontSize", "30px");

//setting multiple properties

$("p").css({
	color: "blue",
	fontSize: "30px",
});

// //class

$("p").addClass("pre");
$("p").removeClass("pre");
$("p").toggleClass("pre");

// //check if class if present

// if ($("p").hasClass("pre")) {
// 	$("p").text("changed");
// }

$("div").css({
	height: "100px",
	width: "100px",
	"background-color": "cyan",
	backgroundColor: "red",
});

//EVENT HANDLING USING JQUERY

// $("div").click(function () {
// 	alert("Div Clicked");
// });

// $("div").on("click", function () {
// 	alert("Div Clicked");
// });

//it will execute handler function when dom is ready
// $(document).ready(function () {
// 	alert("ready !!!");
// });

//when we want to stop the element functionality
$("a").on("click", function (event) {
	event.preventDefault();
	alert("Anchor tag Clicked");
});

$("div").on("click", function () {
	// this -> jo elemet pe click kiya
	var element = $(this);
	element.width(element.width() + 10 + "px");
});
