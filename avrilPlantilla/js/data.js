getProvincias();

async function getProvincias() {
	const resp = await fetch("js/data.json");
	const data = await resp.json();

	const provin = data;

	var ele = document.getElementById("provincias");
	ele.innerHTML =
		ele.innerHTML +
		`
		${provin.map(geo => geo.provincia_id > 1 ){
			return `
				<option value="${geo.id}">${geo.nombre}</option>
			`;
		})};
  `;

	datos = document.getElementById("provincias");
	datos.addEventListener("change", function() {
		datos = this.value;
	});
}
