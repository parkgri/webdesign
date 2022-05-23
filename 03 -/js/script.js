$(".gnb li").hover(function(){
    $(this).find(".sub").stop().slideDown();
},function(){
    $(this).find(".sub").stop().slideUp();
});

$(".tab a").click(function(){
    $(".tab a").removeClass("on");
    $(this).addClass("on");
});

$(".tab1").click(function(){
    $(".notice").show();
    $(".gallery").hide();
});
$(".tab2").click(function(){
    $(".notice").hide();
    $(".gallery").show();
});

$(".open").click(function(){
    $("#popup").show();
});
$(".close").click(function(){
    $("#popup").hide();
});