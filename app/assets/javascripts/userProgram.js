var input;
var outputText;

document.addEventListener("turbolinks:load", function () {

	var run = document.getElementById("run");
	outputText = document.getElementById("outputText");

});

// This is how I display output to the console on the page
var oldLog = console.log;
console.log = function (message) {
	outputText.innerHTML = outputText.innerHTML + message + "<br>";
	oldLog.apply(console, [message]);
}

function runCode() {
	input = document.getElementById("code").value;
	try {
		eval(input) // Log error in thrown
	} catch (err) {
		outputText.innerHTML = err;
	}
}