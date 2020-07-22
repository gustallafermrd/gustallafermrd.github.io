//Template for Header and Footer
document.getElementById("header").innerHTML = `
<div class="header-top d-block">
		<div class="container">
			<div class="row justify-content-between align-items-center">
				<div class="col-lg-8 col-md-8">
					<div class="header-top-info">
						<a href="tel:+54-11-5353-2662"><i class="fa fa-phone mr-2"></i><span>+54 11 5353 2662</span></a>
					</div>
				</div>
				<div class="d-none d-md-block d-lg-block col-md-4 col-lg-4 text-right">
					<a href="mailto:info@avril-assistance.com" class="text-white"><i class="far fa-envelope"></i> info@avril-assistance.com</a>
				</div>
			</div>
		</div>
	</div>
	<nav class="navbar main-nav py-3" id="navbar">
		<div class="container justify-content-between">
		  <a class="navbar-brand" href="index.html">
		  	<img src="./images/logo.png" alt="logo" width="auto" height="70px"></span>
			</a>
			
			<!-- Emisiones Box -->
			<div class="d-flex">
				<div class="navbar-emi d-flex text-white hide">
					<div class="d-flex flex-column justify-content-end">
						<span class="btn btn-emisiones">emisiones</span>
					</div>
					<div class="align-self-center">
						<a href="https://emision.avril-assistance.com/" target="_blank" class="btn btn-avril">Ingresar</a>
						<a href="#" target="_blank" class="btn btn-avril">Registrarse</a>
					</div>
				</div>

				<button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
					<span class="fa fa-bars"></span>
				</button>
			</div>
		</div>
	
		<div class="collapse navbar-collapse" id="navbarsExample09">
			<ul class="navbar-nav">
				<li class="nav-item active">
					<a class="nav-link" href="index.html">Inicio</a>
				</li>
				<li class="nav-item"><a class="nav-link" href="https://emision.avril-assistance.com/" target="_blank">Emisiones</a></li>
				<li class="nav-item"><a class="nav-link" href="reintegros.html">Reintegros</a></li>
				<li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>
				<li class="nav-item"><a class="nav-link" href="quienes.html">Quienes Somos</a></li>
				<li class="nav-item nav-link">
					<a href="https://www.facebook.com/avrilassistance/" target="_blank"><i class="ti-facebook"></i></a>
					<a href="https://twitter.com/AssistanceAvril" target="_blank"><i class="ti-twitter"></i></a>
					<a href="https://www.instagram.com/avril.assistance/" target="_blank"><i class="ti-instagram"></i></a>
				</li>
			</ul>
		</div>
	</nav>
`;

document.getElementById("footer").innerHTML = `
<div class="container">
	<div class="row justify-content-center">
		<div class="col-lg-3 col-sm-6">
			<div class="widget">
				<h4 class="mb-2 text-white text-uppercase">Avril Assistance</h4>
				<p class="text-white">
					Av. Alicia Moreau de Justo 1150,<br />piso 2 Oficina 206 A, C1107<br />
					Buenos Aires, Argentina</p>
				<a href="tel:+54-11-5353-2662" class="text-white"><i class="fa fa-phone"></i> +54 11 5353 2662</a>
				<div>
					<a href="#" class="text-white"><i class="far fa-envelope"></i> info@avril-assistance.com</a>
				</div>
			</div>
		</div>

		<div class="col-lg-2 col-md-6 col-sm-6">
			<div class="widget text-white">
				<h4 class="mb-2 text-white text-uppercase">servicios</h4>
				<ul class="list-unstyled footer-menu lh-35">
					<li><a href="https://emision.avril-assistance.com/" target="_blank">Emisiones</a></li>
					<li class="btn-group dropup">
						<button class="btn btn-footer dropdown-toggle" data-toggle="dropdown">Condiciones Generales</button>
						<ul class="dropdown-menu">
							<li class="dropdown-item"><a href="./pdf/ccgg-es.pdf" target="_blank">Condiciones Generales</a></li>
							<li class="dropdown-item"><a href="./pdf/ccgg-en.pdf" target="_blank">General Conditions</a></li>
							<li class="dropdown-item"><a href="./pdf/ccgg-br.pdf" target="_blank">Condições Gerais</a></li>
						</ul>
					</li>
					<li><a href="#">Folleto Comercial</a></li>
				</ul>
			</div>
		</div>
		<div class="col-lg-2 col-md-6 col-sm-6">
			<div class="widget">
				<h4 class="mb-2 text-white text-uppercase">menu</h4>
				<ul class="list-unstyled footer-menu lh-35">
					<li><a href="index.html">Inicio</a></li>
					<li><a href="reintegros.html">Reintegros</a></li>
					<li><a href="contacto.html">Contacto</a></li>
					<li><a href="quienes.html">Quiénes Somos</a></li>
					// <li><a href="prensa.html">Articulos</a></li>
				</ul>
			</div>
		</div>
		<div class="col-lg-2 col-md-6 col-sm-6">
			<div class="widget">
				<h4 class="mb-2 text-white text-uppercase">seguinos</h4>
				<ul class="list-unstyled footer-socials text-white">
					<li><a href="https://www.facebook.com/avrilassistance/" target="_blank"><i class="ti-facebook mr-2 text-muted"></i>facebook</a></li>
					<li><a href="https://twitter.com/AssistanceAvril" target="_blank"><i class="ti-twitter mr-2 text-muted"></i>Twitter</a></li>
					<li><a href="https://www.instagram.com/avril.assistance/" target="_blank"><i class="fab fa-instagram mr-2 text-muted"></i>Instagram</a></li>
				</ul>
			</div>
		</div>
		<div class="col-lg-2 col-md-6 col-sm-6">
			<div class="widget">
				<h4 class="mb-2 text-white text-uppercase">data fiscal</h4>
				<img src="./images/afip.png" width="140px" height="auto" alt="">
			</div>
		</div>
	</div>	
	<div class="footer-btm pt-4 pb-3">
		<div class="row justify-content-center">
			<div class="col-lg-8 text-center">
				<div class="copyright">
					<p>&copy; <strong>Avril Assistance</strong>. Todos los derechos reservados</p>
				</div>
			</div>
		</div>
	</div>
</div>
`;

// Lighbox Plugin
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});

// new WOW().init();

AOS.init({
	easing: "ease-out",
	duration: 500,
	once: true
});

// Funcionalidad para enconder el boton de emisiones.
$(window).scroll(function() {
	var $this = $(this),
		st = $this.scrollTop(),
		emisiones = $(".navbar-emi");

	if (st > 130) {
		if (emisiones.hasClass("hide")) {
			emisiones.removeClass("hide");
			emisiones.addClass("show");
		}
	}
	if (st < 150) {
		if (emisiones.hasClass("show")) {
			emisiones.removeClass("show");
			emisiones.addClass("hide");
		}
	}
});

(function($) {
	"use strict";

	$(".videoplay").modalVideo();

	$(window).scroll(function() {
		var $this = $(this),
			st = $this.scrollTop(),
			navbar = $(".main-nav");

		if (st > 130) {
			if (!navbar.hasClass("nav-top")) {
				navbar.addClass("nav-top");
			}
		}
		if (st < 150) {
			if (navbar.hasClass("nav-top")) {
				navbar.removeClass("nav-top sleep");
			}
		}
		if (st > 250) {
			if (!navbar.hasClass("awake")) {
				navbar.addClass("awake");
			}
		}
		if (st > 250) {
			if (!navbar.hasClass("hide")) {
				navbar.removeClass("hide");
				navbar.addClass("show");
			}
		}
		if (st < 250) {
			if (navbar.hasClass("awake")) {
				navbar.removeClass("awake");
				navbar.addClass("sleep");
			}
		}
	});

	$(".portfolio-single-slider").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$(".clients-logo").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$(".testimonial-wrap").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$(".portfolio-gallery").each(function() {
		$(this).find(".popup-gallery").magnificPopup({
			type: "image",
			gallery: {
				enabled: true
			}
		});
	});

	var map;

	function initialize() {
		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(50.97797382271958, -114.107718560791)
			// styles: style_array_here
		};
		map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	}

	var google_map_canvas = $("#map-canvas");

	if (google_map_canvas.length) {
		google.maps.event.addDomListener(window, "load", initialize);
	}

	// Counter

	$(".counter-stat").counterUp({
		delay: 10,
		time: 1000
	});

	// Shuffle js filter and masonry
	var Shuffle = window.Shuffle;
	var jQuery = window.jQuery;

	var myShuffle = new Shuffle(document.querySelector(".shuffle-wrapper"), {
		itemSelector: ".shuffle-item",
		buffer: 1
	});

	jQuery('input[name="shuffle-filter"]').on("change", function(evt) {
		var input = evt.currentTarget;
		if (input.checked) {
			myShuffle.filter(input.value);
		}
	});
})(jQuery);
