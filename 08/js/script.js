$(".gnb").hover(function(){
    $(".sub").stop().slideDown();
    $(".nav_back").stop().slideDown();
},function(){
    $(".sub").stop().slideUp();
    $(".nav_back").stop().slideUp();
})

$(".family select").change(function(){
    var $url = $(this).val();
    window.open("http://naver.com")
});