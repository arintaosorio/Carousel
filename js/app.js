//EL GUIADO QUE NO FUNCIONA
// $(document).ready(loadPage);



// var loadPage = function () {

// 	//Elementos
// 	var $buttons = $(".control");
// 	var $previous = $(".previous");
// 	var $next = $(".next");

// 	//Eventos
// 	$buttons.click(changeImage);
// 	$previous.click(previousImage);
// 	$next.click(nextImage);
// }
// var target = 0;

// var changeImage = function () {
// 	target = parseInt($(this).data("target"));
// 	showImage(target);
// } ;

// var previousImage = function (e) {
// 	e.preventDefault();
// 	target = target - 1;
// 	target = (target < 0) ? 5 : target;
// 	showImage(target);
// };

// var nextImage = function (e) {
// 	e.preventDefault();
// 	target = target + 1;
// 	target = (target > 5) ? 0 : target;
// 	showImage(target);
// };

// var showImage = function (target) {
// 	var $lastSlide = $("div.active");
// 	var $slide = $("div[data-slide='" + target + "']");
// 	$lastSlide.removeClass("active");
// 	$slide.addClass("active");
// };



//SOLUCIÓN SILVANA
// var target = 0;
// $(document).ready(function(){
//   var $botones = $(".control");

//   $botones.click(cargarImagen);
// })

// var cargarImagen = function () {
//   var $target = $(this).data("target");
//   mostrarImagen($target);
//   changeColorButton($target);
// }

// var mostrarImagen = function (target) {
//   var $actualSlide = $("div.active");
//   var $newImage = $("div[data-slide=" + target + "]");
//   $actualSlide.removeClass("active");
//   $newImage.addClass("active");
// }

// var changeColorButton = function (target) {
//   var $actualButton = $("button.active");
//   var $newButton = $("button[data-target=" + target+ "]");
//   $actualButton.removeClass("active");
//   $newButton.addClass("active");
// }


//GUIADO MODIFICADO QUE SI SIRVE
var target = 0;
$(document).ready(function () {
	
	//Elementos
	var $buttons = $(".control");
	var $previous = $(".previous");
	var $next = $(".next");

	//Eventos
	$buttons.click(changeImage);
	$previous.click(previousImage);
	$next.click(nextImage);
})


var changeImage = function () {
	target = parseInt($(this).data("target"));
	showImage(target);
} ;

var previousImage = function (e) {
	e.preventDefault();
	target = target - 1;
	target = (target < 0) ? 5 : target;
	showImage(target);
};

var nextImage = function (e) {
	e.preventDefault();
	target = target + 1;
	target = (target > 5) ? 0 : target;
	showImage(target);
};

var showImage = function (target) {
	var $lastSlide = $("div.active");
	var $slide = $("div[data-slide='" + target + "']");
	$lastSlide.removeClass("active");
	$slide.addClass("active");
};
