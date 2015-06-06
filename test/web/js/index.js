var tv_content="";
function backgound_init(){
    var windowWidth=document.documentElement.clientWidth;
    $("body").find("img").eq(0).width(windowWidth);
}
function tv_init() {
    var tv=$(".tv_container");
    var windowWidth=document.documentElement.clientWidth;
    tv_content=$.trim(tv.html());
    tv.html("");
    tv.height(windowWidth/7);
    tv.animate({right:windowWidth/50,width:2*windowWidth/7},800,function(){
        typeWord(tv_content,tv);
    });

}
function typeWord(text,element){
    var char=text.substr(0,1);
    text=text.substring(1);
    if(element.html()==""){
        element.html("-");
    }
    element.html(element.html().substring(0,element.html().length-1)+char+"_");
    if(text.length>0){
        setTimeout(function(){typeWord(text,element)},20);
    }else{
        element.html(element.html().substring(0,element.html().length-1));
    }

}
$(function(){
    backgound_init();
    tv_init();
//    typeWord(tv_content,$(".tv_container"));




    $(window).resize(function(){
        var windowWidth=document.documentElement.clientWidth;
        $("body").find("img").eq(0).width(windowWidth);

        $(".tv_container").css("right",windowWidth/50).height(windowWidth/7).width(2*windowWidth/7);
    })
})