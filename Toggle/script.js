let flag = false;

$(".ball").on("click", function (e) {
	flag = !flag;
	let ce = $(this);
	$(".container").toggleClass("add-color");
	$("h1").toggleClass("h1-color");
	if (flag) {
		ce.css({ right: "0px", left: "" });
	} else {
		ce.css({ right: "", left: "0px" });
	}
});

// //////////////////////////
// $("#toggle").click(function () {

//     $("h1").toggleClass("color-white");
//     $("body").toggleClass("bck-color-black");

//     if (!toggled) {

//         circle.css("margin-left", "100px");
//         toggled = true;

//     } else {

//         circle.css("margin-left", "1px");
//         toggled = false;

//     }

// });
