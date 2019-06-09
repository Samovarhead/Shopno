// ------------------------ Navigation
var menu = document.getElementsByClassName('menu-button')[0];
var panel = document.getElementsByClassName('menu-panel')[0];
var point = document.querySelectorAll('.menu-panel a');

menu.addEventListener('click', function () {
	if (panel.classList.contains('hidden')) {
		panel.classList.remove('hidden');
	} else {
		panel.classList.add('hidden');
	}
});

point.forEach(function (element, i) {
  element.addEventListener('click', function () {
  	panel.classList.add('hidden');
  });
});























// ------------------ First Slider script
var slideCollection = document.getElementsByClassName('slide');
var dotsCollection = document.getElementsByClassName('dot');
var slides = [];
var dots = [];

for (var i = 0; i < slideCollection.length; i++) {
  slides.push(slideCollection[i]);
}

for (var i = 0; i < dotsCollection.length; i++) {
  dots.push(dotsCollection[i]);
}

dots.forEach(function (element, i) {
  element.addEventListener('click', function () {

  	dots.forEach(function (element) {
  		element.classList.remove('active');
  	});

  	slides.forEach(function (element) {
  		element.classList.remove('active');
  	});

  	dots[i].classList.add('active');
  	slides[i].classList.add('active');
  });
});

function sliderToRight () {

	for (var i = 0; i < dots.length; i++) {
		if (dots[i].classList.contains('active')) {
			break;
		}
	}

	if (dots.length == (i + 1)) {
		dots[0].click();
	} else {
		dots[i + 1].click();
	}
}

function sliderToLeft () {

	for (var i = 0; i < dots.length; i++) {
		if (dots[i].classList.contains('active')) {
			break;
		}
	}

	if (i == 0) {
		dots[dots.length - 1].click();
	} else {
		dots[i - 1].click();
	}
}

// ------------------ Modals script

var openButtonCollection = document.querySelectorAll(".cover > button");
var closeButtonCollection = document.querySelectorAll(".modal > button");
var coverCollection = document.querySelectorAll(".cover");
var modalCollection = document.querySelectorAll(".modal");

openButtonCollection.forEach(function (element, i) {
  element.addEventListener('click', function () {

  	coverCollection[i].classList.add('hidden');
  	modalCollection[i].classList.remove('hidden');
  });
});

closeButtonCollection.forEach(function (element, i) {
  element.addEventListener('click', function () {

  	modalCollection[i].classList.add('hidden');
  	coverCollection[i].classList.remove('hidden');
  });
});

// ------------------ Location

function relocate(url){
	window.location.href = url;
}

//---------------------Second Slider Script

var slideCollection1 = document.getElementsByClassName('say-slide');
var dotsCollection1 = document.getElementsByClassName('say-dot');
var sayCollection = document.getElementsByClassName('say');
var slides1 = [];
var dots1 = [];
var say = [];

for (var i = 0; i < slideCollection1.length; i++) {
  slides1.push(slideCollection1[i]);
}

for (var i = 0; i < dotsCollection.length; i++) {
  dots1.push(dotsCollection1[i]);
}

for (var i = 0; i < sayCollection.length; i++) {
  say.push(sayCollection[i]);
}

dots1.forEach(function (element, i) {
  element.addEventListener('click', function () {

  	dots1.forEach(function (element) {
  		element.classList.remove('active');
  	});

  	slides1.forEach(function (element) {
  		element.classList.remove('active');
  	});

  	say.forEach(function (element) {
  		element.classList.remove('active');
  	});

  	dots1[i].classList.add('active');
  	slides1[i].classList.add('active');
  	say[i].classList.add('active');
  });
});

function sliderToRight () {

	for (var i = 0; i < dots1.length; i++) {
		if (dots1[i].classList.contains('active')) {
			break;
		}
	}

	if (dots1.length == (i + 1)) {
		dots1[0].click();
	} else {
		dots1[i + 1].click();
	}
}

function sliderToLeft () {

	for (var i = 0; i < dots1.length; i++) {
		if (dots1[i].classList.contains('active')) {
			break;
		}
	}

	if (i == 0) {
		dots1[dots.length - 1].click();
	} else {
		dots1[i - 1].click();
	}
}

// --------------------------------- Show Up button

var up = document.getElementById('up');

window.onscroll = function() {
      up.classList.remove('hidden');
    };

// --------------------------------------Slow move

   $(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});