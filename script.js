$("#para1").css("color", "red");

$("#para1").css("fontSize", "30px");

//setting multiple properties

$("p").css({
	color: "blue",
	fontSize: "30px",
});

//class

$("p").addClass("pre");
$("p").removeClass("pre");
$("p").toggleClass("pre");

//check if class if present

if ($("p").hasClass("pre")) {
	$("p").text("changed");
}

$("div").css({
	height: "100px",
	width: "100px",
	"background-color": "cyan",
	backgroundColor: "red",
});
