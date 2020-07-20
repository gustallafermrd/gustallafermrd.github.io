function direccion(data) {
	data.filter(data.Department === "direccion");
	console.log(data.name);
}

let main = {};

let showMain = function() {
	for (let prop in main) {
		if (main[prop].Department === "direccion") {
			console.log(prop);
			console.log(main[prop]);
		}
	}
};

fetch("http://127.0.0.1:5500/js/test.json")
	.then(function(resp) {
		return resp.json();
	})
	.then(function(data) {
		main = data;
		showMain();
	});
