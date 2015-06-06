/**
 * Created by Administrator on 2015/6/5.
 */
$(function(){
    init();
    var hovertime;
    $("#welcome").animate({marginTop:'10%'},500,function(){
        $("#loading").fadeOut(1000,function(){
            $("#loading").remove();
            var length=$("#nav .navlist li").length;
            showlist(0,length);
            function showlist(i,length){
                $("#nav .navlist li").eq(i).fadeIn(100,function(){
                    i++
                    if(i<length){
                        showlist(i,length);
                    }
                })
            }
        });

    });

    $("#nav .navlist li a").hover(function(){
        var obj=$(this);
        var change=function(){
            $(obj).css("background","#dedede").css("color","#000000");
            $(obj).parent().animate({width:"95%"},200);
        }
        hovertime=setTimeout(change,200);
        //$(this).css("background","#dedede").css("color","#000000");
        //$(this).parent().animate({width:"95%"},200);
    },function(){
        clearTimeout(hovertime);
        $(this).css("background","none").css("color","#ffffff");
        $(this).parent().animate({width:"80%"},200);
    })

    function init(){
        var height=$("#nav .navlist li").eq(0).height();
        $("#nav .navlist li a").css("line-height",height+"px");
        $("#nav .navlist li").fadeOut(0);
    }
    $(window).resize(function(){
        init();
    })
})