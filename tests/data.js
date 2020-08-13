getProvincias();

async function getProvincias() {
	const resp = await fetch("js/data.json");
	const data = await resp.json();

	const provin = data;

	var filter = provin.filter((data) => data.nombre_id);
	var ele = document.getElementById("provincias");
	ele.innerHTML =
		ele.innerHTML +
		`
		${filter.map((geo) => {
			return `
        <option value="${geo.id}">${geo.nombre}</option>
      `;
		})};
  `;

	datos = document.getElementById("provincias");
	datos.addEventListener("change", function() {
		datos = this.value;
	});

	var filterLocal = provin.filter((data) => data.nombre_id == datos.value);
	console.log(datos);
	var ele = document.getElementById("localidad");
	ele.innerHTML =
		ele.innerHTML +
		`
		${filter.map((geo) => {
			return `
        <option value="${geo.id}">${geo.localidad}</option>
      `;
		})};
  `;
}
