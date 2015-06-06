/**
 * Created by Administrator on 2015/6/6.
 */
$(function(){
    init();
    function init(){
        var height=$("#nav .navlist li").eq(0).height();
        $("#nav .navlist li a").css("line-height",height+"px");
        $("#nav .navlist li").fadeOut(0);
        var nav_btn_height=$("#nav_btn_close").height();
        $("#nav .nav_btn a").css("lineHeight",nav_btn_height+"px");
    }
    $(window).resize(function(){
        init();
        $("#nav .navlist li").fadeIn(0);
    })
})