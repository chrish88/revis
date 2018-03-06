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



//hide all slides
$allSliders.hide();

//listen for click on port nav
$portNav.on('click', function(event){
    //create var and set it event.target
    let $clickedLi = $(event.target);
    //loop through portNavList and return index and element
    $portNavList.each(function(i, element){
      //if clickedLi is equal to element li, display matching slide div
        if ($clickedLi.is($(element))){
            //create var and set it equal to current slide index
            $allSliders.hide();
            let currentSlide = $($allSliders[i]);
            currentSlide.fadeIn(1500);
            
            
        }
    });


});

