$(".gnb>li").hover(function(){
    $(this).find(".sub").stop().slideDown(400);
},function(){
    $(this).find(".sub").stop().slideUp(400);
});

$(".open").click(function(){
    $("#popup").show()
});
$(".close").click(function(){
    $("#popup").hide()
});