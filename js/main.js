//var declarations
const $portNav = $('.port-nav');
const $slider1 = $('.slider-1');
const $slider2 = $('.slider-2');
const $slider3 = $('.slider-3');
const $slider4 = $('.slider-4');

//listen for click on port nav
$portNav.on('click', function(event){
    let $clickedLi = $(event.target);
    console.log($clickedLi.attr('class'));
    //if $clickedLi class name ===portraits
    if ($clickedLi.attr('class') === 'port-list portraits'){
        //display potraits div
        $slider1.show();
        
    }else if ($clickedLi.attr('class') === 'port-list longExposures'){
        //display potraits div
        $slider2.show();
    }else if ($clickedLi.attr('class') === 'port-list landScapes'){
        //display potraits div
        $slider3.show();
    }else if ($clickedLi.attr('class') === 'port-list urban'){
        //display potraits div
        $slider4.show();
    }

    
});