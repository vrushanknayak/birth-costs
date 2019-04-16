$(document).ready(function () {
	let state_template = _.template($("state_template").html()),
		option_template = _.template($("#select_template").html());

	data.forEach(function (state) {
		$("#state").append(option_template({ row: state }));
	});
});

$('#state').on("change", function (e) {
	e.preventDefault();
	console.log("Change!");
	const state_name = $("#state").val(),
		result = _.find(data, { state: state_name }),
		c_insured = parseFloat(result.c_insured.replace(/[^0-9.]+/g, "")),
		c_uninsured = parseFloat(result.c_uninsured.replace(/[^0-9.]+/g, "")),
		v_insured = parseFloat(result.vaginal_insured.replace(/[^0-9.]+/g, "")),
		v_uninsured = parseFloat(result.vaginal_uninsured.replace(/[^0-9.]+/g, ""));

	var csec = "C-Section insured cost"
	var csec1 = "C-Section uninsured cost"
	var vag = "Vaginal insured cost"
	var vag1 = "Vaginal uninsured cost"

	$("#results").find("span").text(c_insured).append(csec)
	$("#orla").find("span").text(c_uninsured).append(csec1)
	$("#orla1").find("span").text(v_insured).append(vag)
	$("#orla2").find("span").text(v_uninsured).append(vag1)


	console.log(result);


	// $("#traits").html(state_template({ state: result }));

	$("#state").find(state_template).text("#state")


});