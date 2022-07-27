$(function() {
    // 메인 슬라이드
    $("#left").click(function() {
        $(".main-slide-flexbox").prepend($(".title-music-flexbox:last")).css({left:"-936px"}).animate({left:0}, 500);
    });

    $("#right").click(function() {
        $(".main-slide-flexbox").append($(".title-music-flexbox:first")).css({left:"-936px"}).animate({left:0}, 500);
    })

    setInterval(function() {
        $(".main-slide-flexbox").append($(".title-music-flexbox:first")).animate({left:0}, 1000);
    }, 3000);

    //ai 플레이리스트
    $("#ai-prev").click(function() {
        $(".ai-flex-box").prepend($(".ai-playlist_1:last")).css({left:"-168px"}).css({left:0}, 500);
    });

    $("#ai-next").click(function() {
        $(".ai-flex-box").append($(".ai-playlist_1:first")).css({left:"-168px"}).css({left:0}, 500);
    });



    //DJ플레이
    $('.menu').click(function() {
        $('.profile-display').slideUp();
        
        if ($(this).next('.profile-display').is(':hidden')){
            $(this).next('.profile-display').slideDown();
        } else{
            $(this).next('.profile-display').slideUp();
        }

        if ($(this).prev('#lastprofile').is(':hidden')){
            $(this).prev('#lastprofile').slideDown();
        } else{
            $(this).prev('#lastprofile').slideUp();
        }
    });
});