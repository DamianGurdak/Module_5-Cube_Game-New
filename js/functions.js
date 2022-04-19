function printMessage(msg) {
	let div = document.createElement("div");
	div.innerHTML = msg;
	document.getElementById("messages").appendChild(div);
}

function clearMessages() {
	document.getElementById("buttons").innerHTML = "";
}
