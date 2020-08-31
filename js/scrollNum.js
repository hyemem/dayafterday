$(function(){
    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();
        scrollTop = Math.floor(scrollTop); // scrollTop값을 정수로 나타내기 위해서 floor함수로 내림
        topNumber(scrollTop);
    });

    function topNumber(str){
        $("#scrollNum").text(str);
    };
});