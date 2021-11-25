$("button").on("click", function (e) {
	let first = $("input").get(0).value;
	let second = $("input").get(1).value;
	let third = $("input").get(2).value;

	if (first && second && third) {
	} else {
		if (!first) {
			alert("Please enter Roll Number");
		} else if (!second) {
			alert("Please enter Name");
		} else {
			alert("Please enter Marks");
		}
	}
});
