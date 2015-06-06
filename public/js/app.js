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
    //nav伸缩按钮控制
    $("#nav").hover(function(){
        $("#nav_btn_close").css("display","block");
    },function(){
        $("#nav_btn_close").css("display","none");
    })
    //按钮实现伸缩
    $("#nav_btn_close a").click(function(){
        $("#nav").animate({left:"-15%"},500,function(){
            $("#nav_btn_close").css("display","none");
            $("#nav_btn_open").css("display","block");
        });
        $("#right_box").animate({width:"100%",marginLeft:"0"},500)
    })
    $("#nav_btn_open a").click(function(){
        $("#nav").animate({left:0},500,function(){
            $("#nav_btn_close").css("display","block");
            $("#nav_btn_open").css("display","none");
        });
        $("#right_box").animate({width:"85%",marginLeft:"15%"},500)
    })

    function init(){
        var height=$("#nav .navlist li").eq(0).height();
        $("#nav .navlist li a").css("line-height",height+"px");
        $("#nav .navlist li").fadeOut(0);
        var nav_btn_height=$("#nav_btn_close").height();
        $("#nav .nav_btn a").css("lineHeight",nav_btn_height+"px");
    }
    $(window).resize(function(){
        init();
    })
})