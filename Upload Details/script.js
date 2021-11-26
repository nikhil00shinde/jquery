let white = true;
let count = 1;
$("button").on("click", function (e) {
	let first = $("input").get(0).value;
	let second = $("input").get(1).value;
	let third = $("input").get(2).value;

	if (first && second && third) {
		let item = `<div class="each-details ${count}">
		Roll no - <span class="highlight">${first}</span> ,
		<span class="highlight">${second}</span> has scored
		<span class="highlight">${third}</span> marks
	</div>`;
		$(".show-details").append(item);
		white
			? $(".each-details" + "." + count).css("backgroundColor", "white")
			: $(".each-details" + "." + count).css("backgroundColor", "gray");

		white = !white;
		count++;
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
