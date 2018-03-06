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
//select second-col div of porfolio section
const $secondCol = $('.second-col');
//selects main image in porfolio section
let $mainImg = $('.main-img');
//hides main image
$mainImg.hide(); 


//hide all slides
$allSliders.hide();

//event listener listening for click on port nav
$portNav.on('click', function(event){
    //create var and set it event.target
    let $clickedLi = $(event.target);
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

//event listener listening for click on second-col of porfolio section
$secondCol.on('click', function(event){
    //stores event target in variable
    let $clickedImg = $(event.target);
    //gets the src value from event target 
    let imgSrc = $clickedImg.attr('src');
    
//if image is clicked, set main image src to clicked image src
    if ($clickedImg){
        $mainImg.fadeIn(1500);
        $mainImg.attr('src', imgSrc);
        $mainImg.css('border', '4px solid var(--myBlack)').css('box-shadow', '1px 1px 10px var(--myBlack)');
        
    }else{
        $mainImg.hide();
    }
});


});

