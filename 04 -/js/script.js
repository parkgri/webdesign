$(".gnb li").hover(function(){
    $(".sub").stop().slideDown();
    $(".nav_back").stop().slideDown();
},function(){
    $(".sub").stop().slideUp();
    $(".nav_back").stop().slideUp();
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
    $(".gallery").show();
    $(".notice").hide();
});

$(".open").click(function(
  ){  $("#popup").show();
});
$(".close").click(function(
    ){  $("#popup").hide();
  });