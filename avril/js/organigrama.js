getData();

async function getData() {
	const resp = await fetch("js/organigrama.json");
	const data = await resp.json();
	//Direccion
	const filterDireccion = data.filter((data) => data.department == "direccion");
	document.getElementById("dire").innerHTML = `
  ${filterDireccion
		.map(function(dire) {
			return `
      <div class="persona d-flex">
          <div class="inner">
            <img class="inner-image" src="./images/organigrama/${dire.pic}.png" alt="">
          </div>
          <div class="contenido">
            <p class="nombre ">${dire.name}</p>
            <p class="cargo">${dire.position}</p>
          </div>
        </div>
      `;
		})
		.join("")}
  `;
	//Planificacion y Producto
	const filterPlanificacion = data.filter((data) => data.department == "planificacion");
	document.getElementById("planificacion").innerHTML = `
    ${filterPlanificacion
		.map(function(plani) {
			return `
        <div class="persona d-flex">
          <div class="inner">
            <img class="inner-image" src="./images/organigrama/${plani.pic}.png" alt="">
          </div>
          <div class="contenido">
            <p class="nombre ">${plani.name}</p>
            <p class="cargo">${plani.position}</p>
          </div>
        </div>
      `;
		})
		.join("")}
  `;
	//Asistencias
	const filterAsistencia = data.filter((data) => data.department == "asistencias");
	document.getElementById("asis").innerHTML = `
    ${filterAsistencia
		.map(function(asis) {
			return `
        <div class="persona d-flex">
          <div class="inner">
            <img class="inner-image" src="./images/organigrama/${asis.pic}.png" alt="">
          </div>
          <div class="contenido">
            <p class="nombre ">${asis.name}</p>
            <p class="cargo">${asis.position}</p>
          </div>
        </div>
      `;
		})
		.join("")}
  `;
	//Administracion
	const filterAdministracion = data.filter((data) => data.department == "administracion");
	document.getElementById("administracion").innerHTML = `
    ${filterAdministracion
		.map(function(admin) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${admin.pic}.png" alt="">
        </div>
        <div class="contenido">
          <p class="nombre ">${admin.name}</p>
          <p class="cargo">${admin.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
	//RRHH
	const filterRRHH = data.filter((data) => data.department == "rrhh");
	document.getElementById("rrhh").innerHTML = `
    ${filterRRHH
		.map(function(rrhh) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${rrhh.pic}.png" alt="">
        </div>
        <div class="contenido">
          <p class="nombre ">${rrhh.name}</p>
          <p class="cargo">${rrhh.position}</p>
        </div>
      </div>
    `;
		})
		.join("")}
  `;
	//Intendencia
	const filterIntendencia = data.filter((data) => data.department == "intendencia");
	document.getElementById("intendencia").innerHTML = `
    ${filterIntendencia
		.map(function(intendencia) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${intendencia.pic}.png" alt="">
        </div>
        <div class="contenido">
          <p class="nombre ">${intendencia.name}</p>
          <p class="cargo">${intendencia.position}</p>
        </div>
      </div>
    `;
		})
		.join("")}
  `;
	//Comerciales
	const filterComerciales = data.filter((data) => data.department == "comerciales");
	document.getElementById("comercio").innerHTML = `
    ${filterComerciales
		.map(function(comercio) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${comercio.pic}.png" alt="">
        </div>
        <div class="contenido">
          <p class="nombre ">${comercio.name}</p>
          <p class="cargo">${comercio.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
}
