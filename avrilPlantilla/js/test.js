let main = {};
//Direccion
let direccion = function() {
	const filterDireccion = main.filter((main) => main.department == "direccion");
	document.getElementById("dire").innerHTML = `
    ${filterDireccion
		.map(function(dire) {
			return `
      <div class="persona d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
        <div class="content">
          <p class="nombre ">${dire.name}</p>
          <p class="cargo">${dire.position}</p>
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
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
        <div class="content">
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
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
        <div class="content">
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
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
        <div class="content">
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
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
        <div class="content">
          <p class="nombre ">${operacion.name}</p>
          <p class="cargo">${operacion.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
	document.getElementById("operaciones3").innerHTML = `
  ${thirdOpRow
		.map(function(operacion) {
			return `
      <div class="persona d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
        <div class="content">
          <p class="nombre ">${operacion.name}</p>
          <p class="cargo">${operacion.position}</p>
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
	document.getElementById("comercio").innerHTML = `
    ${filterComerciales
		.map(function(comercio) {
			return `
      <div class="persona d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
        <div class="content">
          <p class="nombre ">${comercio.name}</p>
          <p class="cargo">${comercio.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
};

fetch("js/test.json")
	.then(function(resp) {
		return resp.json();
	})
	.then(function(data) {
		main = data;
		direccion();
		asistencia();
		operaciones();
	});
