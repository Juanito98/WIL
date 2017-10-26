function piramide(n) {
	var st = "";
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= i; j++) {
			st += "*";
		}
		st += "<br>";
	}
	document.getElementById('demo').innerHTML = st;
}