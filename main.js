$(document).ready(function () {
	let state_template = _.template($("state_template").html()),
		option_template = _.template($("#select_template").html());

	data.forEach(function (state) {
		$("#state").append(option_template({ row: state }));
	});
});


$('body').on("change", "#state, input", function (e) {
	console.log("Change!");


	let state_name = $("#state").val(),
		children = $("input").val();
	console.log("number of kids is " + children);
	if (state_name === "" || children === "") {
		return false;
	}

	//convert kids to number
	children = parseInt(children);

	const result = _.find(data, { state: state_name }),
		c_insured = parseFloat(result.c_insured.replace(/[^0-9.]+/g, "")),
		c_uninsured = parseFloat(result.c_uninsured.replace(/[^0-9.]+/g, "")),
		v_insured = parseFloat(result.vaginal_insured.replace(/[^0-9.]+/g, "")),
		v_uninsured = parseFloat(result.vaginal_uninsured.replace(/[^0-9.]+/g, "")),
		c_insured_total = c_insured * children,
		c_uninsured_total = c_uninsured * children,
		v_insured_total = v_insured * children,
		v_uninsured_total = v_uninsured * children;
	// console.log("The number changes to " + c_uninsured_total);
	console.log(c_uninsured);

	const csec = "C-Section insured",
		csec1 = "C-Section uninsured",
		vag = "Vaginal insured",
		vag1 = "Vaginal uninsured";

	$("#c_insured").find("span.number").text("$" + c_insured_total.toLocaleString());
	$("#c_uninsured").find("span.number").text("$" + c_uninsured_total.toLocaleString());
	$("#v_insured").find("span.number").text("$" + v_insured_total.toLocaleString());
	$("#v_uninsured").find("span.number").text("$" + v_uninsured_total.toLocaleString());

	$("#c_insured").find("span.desc").text(csec);
	$("#c_uninsured").find("span.desc").text(csec1);
	$("#v_insured").find("span.desc").text(vag);
	$("#v_uninsured").find("span.desc").text(vag1);

	$(".total").addClass("active");


	console.log(result);


	// $("#traits").html(state_template({ state: result }));

	$("#state").find(state_template).text("#state")


});