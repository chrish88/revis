/*************************************
  MOBILE NAVIGATION SECTION
 **************************************/
//declaration
const $meunuBtn = $('.menu-btn');
const $meunuBtnDiv = $('.menu-btn-div');
const $mainNav = $('.mobile-main-nav-ul');

$mainNav.hide();




$(document).ready(function(){
    
    $meunuBtnDiv.on('click', function(e){
        const menuClick = e.target;
        if (menuClick === $meunuBtn[0]){
            $mainNav.css({'display': 'flex', 'flex-direction': 'column'});
        }
    });

});





/*************************************
 PORTFOLIO SECTION
 **************************************/
//declarations
const $portNav = $('.port-nav');
const $slider1 = $('.slider-1');
const $slider2 = $('.slider-2');
const $slider3 = $('.slider-3');
const $slider4 = $('.slider-4');


//array that holds reference to every li
const $portNavList = $('.port-list');
//array that holds reference to every slider
const $allSliders = $('.slide');
//selects portfolio section
const $portfolioSec = $('.portfolio')
//select second-col div of porfolio section
const $secondCol = $('.second-col');
//selects main image in porfolio section
let $mainImg = $('.main-img');

//hides main image
$mainImg.hide(); 

//hide all slides
$allSliders.hide();

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

//event listener listening for click on port nav to display second-col thumbnail
$portNav.on('click', function(event){
    //create var and set it event.target
    let $clickedLi = $(event.target);
    //sets portfolio height to auto
    $portfolioSec.css('height', 'auto');
    //loop through portNavList and return index and element
    $portNavList.each(function(i, element){
        $mainImg.hide();
      //if clickedLi is equal to element li, display matching slide div
        if ($clickedLi.is($(element))){
            //create var and set it equal to current slide index
            $allSliders.hide();
            let currentSlide = $($allSliders[i]);
            currentSlide.fadeIn(1500); 
        }
    });
    

//event listener listening for click on second-col thumbnail image to display as main image
$secondCol.on('click', function(event){
    //stores event target in variable
    let $clickedImg = $(event.target);
    //gets the src value from event target 
    let imgSrc = $clickedImg.attr('src');
    
//if image is clicked, set main image src to clicked image src
    if ($clickedImg){
        $mainImg.fadeIn(1500);
        $mainImg.attr('src', imgSrc);
        $mainImg.css({'border': '4px solid var(--myBlack)', 'box-shadow': '1px 1px 10px var(--myBlack)'});
        
    }else{
        $mainImg.hide();
    }
});


});

