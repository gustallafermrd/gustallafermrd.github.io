// var datos = 0;
// getLocalidades();
getProvincias();

async function getProvincias() {
	const resp = await fetch("js/provincias.json");
	const data = await resp.json();

	const provin = data;
	var ele = document.getElementById("provincias");
	ele.innerHTML =
		ele.innerHTML +
		`
		${provin.map((geo) => {
			return `
				<option value="${geo.nombre}">${geo.nombre}</option>
			`;
		})};
	`;
	datos = document.getElementById("provincias");
	datos.addEventListener("change", function() {
		datos = this.value;
	});
}

// async function getLocalidades() {
// 	const local = await fetch("js/localidades.json");
// 	const localData = await local.json();

// 	const filterLocal = localData.filter((data) => data.provincia_id == "2");
// 	var ele = document.getElementById("localidades");
// 	ele.innerHTML =
// 		ele.innerHTML +
// 		`
// 		${filterLocal.map((loc) => {
// 			return `
// 				<option value="${loc.provincia_id}">${loc.localidad}</option>
// 			`;
// 		})};
// 	`;
// }
