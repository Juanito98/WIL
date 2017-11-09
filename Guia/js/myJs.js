function piramide(elem, n) {
	var st = "";
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= i; j++) {
			st += "*";
		}
		st += "<br>";
	}
	elem.innerHTML = st;
	console.log("console.log -> this is a message.");
}