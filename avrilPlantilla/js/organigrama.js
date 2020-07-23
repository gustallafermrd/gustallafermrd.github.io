let main = {};
//Direccion
let direccion = function() {
	const filterDireccion = main.filter((main) => main.department == "direccion");
	document.getElementById("dire").innerHTML = `
    ${filterDireccion
		.map(function(dire) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img src="./images/organigrama/direccion.png">
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
};

//Planificacion y Producto
let planificacion = function() {
	const filterPlanificacion = main.filter((main) => main.department == "planificacion");
	document.getElementById("planificacion").innerHTML = `
    ${filterPlanificacion
		.map(function(plani) {
			return `
        <div class="persona d-flex">
          <div class="inner">
            <img src="./images/organigrama/planificacion.png">
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
};
//Asistencias
let asistencia = function() {
	const filterAsistencia = main.filter((main) => main.department == "asistencias");
	var firstRow = filterAsistencia.slice(0, 5);
	var secondRow = filterAsistencia.slice(5, 10);
	document.getElementById("asis").innerHTML = `
    ${firstRow
		.map(function(asis) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img src="./images/organigrama/asistencias.png">
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
	document.getElementById("asis2").innerHTML = `
    ${secondRow
		.map(function(asis) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img src="./images/organigrama/asistencias.png">
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
};

//Operaciones
let operaciones = function() {
	const filterOperaciones = main.filter((main) => main.department == "operaciones");
	var firstOpRow = filterOperaciones.slice(0, 5);
	var secondOpRow = filterOperaciones.slice(5, 9);
	var thirdOpRow = filterOperaciones.slice(9, 14);
	document.getElementById("operaciones").innerHTML = `
    ${firstOpRow
		.map(function(operacion) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img src="./images/organigrama/operaciones.png">
          <img class="inner-image" src="./images/organigrama/${operacion.pic}.png" alt="">
        </div>
        <div class="contenido">
          <p class="nombre ">${operacion.name}</p>
          <p class="cargo">${operacion.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
	document.getElementById("operaciones2").innerHTML = `
  ${secondOpRow
		.map(function(operacion) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img src="./images/organigrama/operaciones.png">
          <img class="inner-image" src="./images/organigrama/${operacion.pic}.png" alt="">
        </div>
        <div class="contenido">
          <p class="nombre ">${operacion.name}</p>
          <p class="cargo">${operacion.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
};

//Recursos Humanos
let rrhh = function() {
	const filterRRHH = main.filter((main) => main.department == "rrhh");
	document.getElementById("rrhh").innerHTML = `
    ${filterRRHH
		.map(function(rrhh) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img src="./images/organigrama/rrhh.png">
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
};

//Comerciales
let comerciales = function() {
	const filterComerciales = main.filter((main) => main.department == "comerciales");
	var firstCoRow = filterComerciales.slice(0, 5);
	var secondCoRow = filterComerciales.slice(5, 10);
	var thirdCoRow = filterComerciales.slice(10, 15);
	var fourthCoRow = filterComerciales.slice(15, 21);
	document.getElementById("comercio").innerHTML = `
    ${firstCoRow
		.map(function(comercio) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img src="./images/organigrama/comercial.png">
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
	document.getElementById("comercio2").innerHTML = `
    ${secondCoRow
		.map(function(comercio) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img src="./images/organigrama/comercial.png">
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
	document.getElementById("comercio3").innerHTML = `
    ${thirdCoRow
		.map(function(comercio) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img src="./images/organigrama/comercial.png">
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
	document.getElementById("comercio4").innerHTML = `
    ${fourthCoRow
		.map(function(comercio) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img src="./images/organigrama/comercial.png">
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
};

fetch("js/organigrama.json")
	.then(function(resp) {
		return resp.json();
	})
	.then(function(data) {
		main = data;
		direccion();
		planificacion();
		asistencia();
		operaciones();
		comerciales();
		rrhh();
	});
