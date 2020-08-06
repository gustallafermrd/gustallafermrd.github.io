let main = {};
//Direccion
let direccion = function() {
	const filterDireccion = main.filter((main) => main.department == "direccion");
	document.getElementById("dire").innerHTML = `
    ${filterDireccion
		.map(function(dire) {
			return `
      <div class="persona2 d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
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

//Asistencias
let asistencia = function() {
	const filterAsistencia = main.filter((main) => main.department == "asistencias");
	var firstRow = filterAsistencia.slice(0, 5);
	var secondRow = filterAsistencia.slice(5, 10);
	document.getElementById("asis").innerHTML = `
    ${firstRow
		.map(function(asis) {
			return `
      <div class="persona2 d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
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
      <div class="persona2 d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
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
      <div class="persona2 d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
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
      <div class="persona2 d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
        <div class="contenido">
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
      <div class="persona2 d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
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

//Comerciales
let comerciales = function() {
	const filterComerciales = main.filter((main) => main.department == "comerciales");
	var firstCoRow = filterComerciales.slice(0, 4);
	var secondCoRow = filterComerciales.slice(4, 7);
	var thirdCoRow = filterComerciales.slice(7, 10);
	var fourthCoRow = filterComerciales.slice(10, 13);
	var fifthCoRow = filterComerciales.slice(12, 16);
	var sixthCoRow = filterComerciales.slice(15, 19);
	document.getElementById("comercio").innerHTML = `
    ${firstCoRow
		.map(function(comercio) {
			return `
      <div class="persona2 d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
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
      <div class="persona2 d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
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
      <div class="persona2 d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
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
      <div class="persona2 d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
        <div class="contenido">
          <p class="nombre ">${comercio.name}</p>
          <p class="cargo">${comercio.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
	document.getElementById("comercio5").innerHTML = `
    ${fifthCoRow
		.map(function(comercio) {
			return `
      <div class="persona2 d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
        <div class="contenido">
          <p class="nombre ">${comercio.name}</p>
          <p class="cargo">${comercio.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
	document.getElementById("comercio6").innerHTML = `
    ${sixthCoRow
		.map(function(comercio) {
			return `
      <div class="persona2 d-flex">
        <img src="./images/circulo.png" width="75px" height="75px" alt="">
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
		asistencia();
		operaciones();
		comerciales();
	});
