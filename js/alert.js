$(document).ready(function(){

    //팝업창 보여주기
    $("#popup_bg").delay(1500).animate({"opacity":"1"},100,"easeOutCubic");


    $("#close").on("click",close);
    

    function close(){
        $("#popup_bg").hide();
    }

});