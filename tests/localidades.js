getProvincias();

async function getProvincias() {
	const resp = await fetch("js/localidades2.json");
	const data = await resp.json();

	const provin = data;
	var ele = document.getElementById("provincias");
	console.log(data);
  data.reduce(acc, el){
    
  }
	// var ele = document.getElementById("provincias");
	// ele.innerHTML =
	// 	ele.innerHTML +
	// 	`
	// 	${provin.map((geo) => {
	// 		return `
	// 			<option value="${geo.provincia_id}">${geo.provincia_nombre}</option>
	// 		`;
	// 	})};
	// `;

	// datos = document.getElementById("provincias");
	// datos.addEventListener("change", function() {
	// 	datos = this.value;
	// 	console.log(datos);
	// });
}
