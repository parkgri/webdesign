$(".gnb>li").hover(function(){
    $(this).find(".sub").stop().fadeIn();
},function(){
    $(this).find(".sub").stop().fadeOut();
});
