$(document).ready(function(){
    $("body").css({"height":11024+$(window).innerHeight()});
    // 높이값은 가로스크롤 되는 스크롤 값도 포함해서 지정
    $(window).on("scroll",scrollAni);

    // scrollAni 함수
    function scrollAni(){
        var scrollTop=$(document).scrollTop();
        // (가로스크롤 종료까지 누적 스크롤값)top_wrap의 height값 + (horizontal_wrap의 width값 - 1920px) 
        var productNum = $("#product_list li").size(); //제품 리스트 li 개수

        // 초기 세로 스크롤 영역-----------------------------------------
        if(scrollTop<2638){
            $("#top_wrap").css({"top":0-scrollTop});
            $("#horizontal_wrap").css({"top":2638-scrollTop,"left":0});
            $("#bottom_wrap").css({"top":3618-scrollTop});


            //세로 스크롤 브랜드 영역 애니메이션
            if(scrollTop>=$('#brand_wrap').offset().top*0.7){
                $('#brand_img_decobox:not(:animated)').animate({"left":0},500,"easeOutCubic",function(){

                    // 이미지 애니메이션
                    $("#brand_img").css('opacity',1);
                    $(this).animate({"width":0},400,"easeOutCubic");
                    $('#brand_img').addClass("selected");

                    // 텍스트 애니메이션
                    $("#brand_tit_wrap").animate({"opacity":1,"left":0},1400,"easeOutBack");
                    $("#brand_txt").animate({"opacity":1,"left":0},1600,"easeOutBack");
                    $(".more_btn").animate({"opacity":1,"left":500},1800,"easeOutBack");
                });
            };

            
            if(scrollTop >= $("#product_wrap").offset().top*0.8){
                $("#product_titbox span").animate({"top":0,"opacity":1},700,"easeOutBack");
                $("#product_titbox h2").animate({"top":0,"opacity":1},900,"easeOutBack");

                for (i = 0; i < productNum; i++){
                    $("#product_list").children().eq(i).delay(i*200).animate({"top":0,"opacity":1},1200,"easeOutBack");
                }
            }
        }

        // 가로 스크롤 영역-----------------------------------------
        else if(scrollTop>=2638 && scrollTop<8800){
            $("#top_wrap").css({"top":-2638}); //가로 스크롤 영역을 기준으로 (수치 0)  최상단에 위치 =>  (-top_wrap 영역 높이)
            $("#bottom_wrap").css({"top":966}); //가로 스크롤 영역을 기준으로 (수치 0)  다음에 위치 => (+horizontal_wrap 높이)

            $("#horizontal_wrap").css({"top":0, "height":$(window).innerHeight()}); // 중간영역은 현재 좌표에서 top:0
            $("#horizontal_wrap").css({"left":-(scrollTop-2638)}); // left좌표를 scrollTop-2638(지금까지스크롤누적값)+2456(가로스크롤 마지막 콘텐츠 너비)만큼 -하면 왼쪽으로 이동 


            // 가로 스크롤 영역 애니메이션

            // 브랜드 소개 01 사진 애니메이션
            if(scrollTop>=3000){
                $("#horizontal_img_01").addClass("selected");
                $("#horizontal_img_02").addClass("selected");
            }

            if(scrollTop>=3900){
                $("#horizontal_img_03").addClass("selected");
            }

            if(scrollTop>=5550){
                $("#horizontal_img_04").addClass("selected");
                $("#horizontal_img_05").addClass("selected");
            }

            if(scrollTop>=8000){
                $("#horizontal_img_06").addClass("selected");
                $("#horizontal_img_07").addClass("selected");
            }


            // 글자 위치 애니메션
            $("#deco_letter_01").stop().animate({"top":-(scrollTop-5000)*0.2},1600,"easeOutExpo");
            $("#deco_letter_02").stop().animate({"top":(scrollTop-9000)*0.2},1600,"easeOutExpo");

        }

        // 다시 세로 스크롤 시작-----------------------------------------
        else if(scrollTop>=8800){
            $("#top_wrap").css({"top":-2638-(scrollTop-8800)});
            $("#horizontal_wrap").css({"top":0-(scrollTop-8800),"left":-6162});
            $("#bottom_wrap").css({"top":$(window).innerHeight()-(scrollTop-8800)});
            //horizontal_wrap에서 고정한 top값에서 현재까지 누적스크롤값(가로스크롤 끝나는 스크롤값)을 뺀 scrollTop값만큼 위로 올려서 스크롤 적용

            // 애니메이션 효과
            if(scrollTop>=$("#location_wrap").offset().top){
                $("#location_wrap").addClass("selected");
            }
        }
    }
    
});