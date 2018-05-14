$(document).ready(function(){
    $('.navdesign').on('click','a',function(e){
        e.preventDefault();
        $(document).off("scroll");
        $('html,body').stop().animate({scrollTop:($(this.hash).offset().top)-50},'slow');
        });
    $('.drop').mouseenter(function(event){
        $('.hidden').slideDown();
    });
    $('.drop').mouseleave(function(event){
        $('.hidden').slideUp();
    })
        $('.magic').stop().animate({top:'0px',opacity:'1'},{duration:1000});
        $('.startbut').stop().animate({marginTop:'260px',opacity:'1'},{duration:1000});
var h= window.innerHeight;
var i2= $('.img2').offset();
var ar="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,  consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.";
let timer = null;
var i=0;
var ne="";
function typewriter()
{
    if (i<ar.length)
    {   
        ne=ne+ar.charAt(i)
        $('.descript').text(ne);
        i++;
        timer = setTimeout(typewriter,50);
    }
    else {
        clearTimeout(timer)
    }
}
let typewriterCalled = false;
$(window).on('scroll',check_if_in_view);
$(window).trigger('scroll');
function check_if_in_view()
{
    var scroll = $(window).scrollTop();
    if(scroll>50)
    {
        $('nav').addClass('bgc');
        $('.blood').addClass('change');
    }
    if(scroll<50)
    {
        $('nav').removeClass('bgc');
        $('.blood').removeClass('change');
    }
    if(scroll+h>i2.top+70)
    {
        $('.img2').addClass('animate');
        if (typewriterCalled === false) typewriter();
        typewriterCalled = true;
    }
    if (scroll+h>$('.divider').offset().top)
    {
        $('.divider').addClass('dividernew');
    }
}
$('.workimg').mouseenter(function(event){
    $(this).addClass('imganim');
    $('.add1').addClass('applyline1');
    $('.add2').addClass('applyline2');
});
$('.workimg').mouseleave(function(event){
    $(this).removeClass('imganim');
    $('.add1').removeClass('applyline1');
    $('.add2').removeClass('applyline2');
});
});