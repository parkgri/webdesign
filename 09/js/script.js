$(".tab li:eq(0)").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
);

$(".tab li:eq(1)").click(
    function(){
        $(".notice").hide();
        $(".gallery").show();
    }
);
$(".gnb>li").hover(function(){
    $(this).find(".sub").stop().slideDown();
},function(){
    $(this).find(".sub").stop().slideUp();
});

$(".open").click(function(){
    $("#popup").show();
});
$(".close").click(function(){
    $("#popup").hide();
});