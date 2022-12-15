// read-more
function readMore() {
let readLess = document.getElementById("readLess");
let readMore = document.getElementById("readMore");
let moreBtn = document.getElementById("morebtn");
if (readLess.style.display === "none") {
readLess.style.display = "inline";
moreBtn.innerHTML = "Read more";
readMore.style.display = "none";
} else {
readLess.style.display = "none";
moreBtn.innerHTML = "Read less";
readMore.style.display = "inline";
}
}


// // Counter-up
// ++++++++++++++++++++++++++++++
// view area function to start the animation
var element_to_animate = $('.animate');
var $window = $(window);

// function to check element in view area
function into_view_area() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);

	// calculate view area
	$.each(element_to_animate, function() {
		var element_height = $(this).outerHeight();
		var element_top_position = $(this).offset().top;
		var element_bottom_position = (element_top_position + element_height);
 
		//check to see if this current element is within viewport
		if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
			$(this).addClass('in_view');
		}
		else {
			$(this).removeClass('in_view');
		}
	});
}

// initialize function
$window.on('scroll resize', into_view_area);
$window.trigger('scroll');


// ++++++++++++++++++++++++++++++++++++
// counter box to count up the number from 0 to defined value

$.fn.countTo = function(options) {
	// merge the default plugin settings with the custom options
	options = $.extend({}, $.fn.countTo.defaults, options || {});

	// how many times to update the value, and how much to increment the value on each update
	var loops = Math.ceil(options.speed / options.refreshInterval),
		increment = (options.to - options.from) / loops;

	return $(this).each(function() {
		var _this = this,
			loopCount = 0,
			value = options.from,
			interval = setInterval(updateTimer, options.refreshInterval);

		// update value by loops
		function updateTimer() {
			value += increment;
			loopCount++;

			// add decimal and change string to number
			var valueWithDecimal = value.toFixed(options.decimals),
				valueAsNumber = Number.parseFloat(valueWithDecimal);

			// output frontend
			var valueAsLocaleNumber = valueAsNumber.toLocaleString();
			//$(_this).html(valueAsLocaleNumber);
			$(_this).html(valueAsLocaleNumber.replace(/\./g,$(_this).data('seperator')));

			// custom functions on update
			if (typeof(options.onUpdate) == 'function') {
				options.onUpdate.call(_this, value);
			}

			// custom functions on complete
			if (loopCount >= loops) {
				clearInterval(interval);
				value = options.to;

				if (typeof(options.onComplete) == 'function') {
					options.onComplete.call(_this, value);
				}
			}
		}
	});
};

// default options
$.fn.countTo.defaults = {
	from: 0,  // the number the element should start at
	to: 100,  // the number the element should end at
	speed: 3000,  // how long it should take to count between the target numbers
	refreshInterval: 100,  // how often the element should be updated
	decimals: 0,  // the number of decimal places to show
	onUpdate: null,  // callback method for every time the element is updated,
	onComplete: null,  // callback method for when the element finishes updating
};



// get the element and start to count number in view area
function updateOptions() {
	var element = $('.count_up');
	
	element.each(function() {
		if($(this).hasClass('in_view') && !$(this).hasClass('is_done')) {
			$(this).addClass('is_running');

			if($(this).hasClass('is_running')) {
				$(this).find('.value').countTo({
					from: 0
					,to: $(this).find('.value').data('count')
					,speed: 3000
					,refreshInterval: 50
					,decimals: $(this).find('.value').data('decimal')
					,onUpdate: function(value) {
						element.addClass('is_done');
					}
					,onComplete: function(value) {
						element.removeClass('is_running');
					}
				});
			}
		}
	});
}
$(window).on('scroll load', function() {
    updateOptions();
});

$('button.start').click(function() {
	$('.count_up').removeClass('is_done');
	$('.count_up').removeClass('in_view');
	into_view_area();
	updateOptions();
});

// I DON'T KNOW
$(document).ready(function(){
  $('.btn-start').click( function(){
    $('.step-wrapper').toggleClass('move-line');
  });

});

// read more
$("#conent_hide").hide();
$("#re").click(function(){
x=$("#re").text();

$("#conent_hide").slideToggle( function(){

    if(x == "Read More"){
    $("#re").text("Read Less").css({color:"#004730"});
    }
    else{
    $("#re").text("Read More").css({color:"#004730"});
    }
});
});



function showhide() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("toggle");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


// go to the top
$(document).ready(function() {
  $('.go-top').hide(0)

  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(300);
    }
  });
  $('.go-top').click(function() {
    event.preventDefault();

    $('html , body').animate({scrollTop: 0}, 1000);
  });
});


/**********************/
	/*	Client carousel   */
	/**********************/
  $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});



// FAQs SECTION
const accordionBtns = document.querySelectorAll(".item-header");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("active");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});


// gallery SECTION
