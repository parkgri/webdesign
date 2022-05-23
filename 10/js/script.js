// $(".gnb>li").hover(function(){
//     $(this).find(".sub").stop().slideDown();
// },function(){
//     $(this).find(".sub").stop().slideUp();
// });

$(".gnb li").click(function(){
    $(".sub").stop().slideUp();
    $(this).find(".sub").stop().slideToggle();
});

$(".open").click(function(){
    $("#popup").show();
});
$(".close").click(function(){
    $("#popup").hide();
});