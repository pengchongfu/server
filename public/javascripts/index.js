var useremail=$("#useremail");
var username=$("#username");
var usercontent=$("#usercontent");
var send=$("#send");
var emailbutton=$("#emailbutton");
var emaildiv=$("#emaildiv");
var gamebutton=$("#gamebutton");
var gamediv=$("#gamediv");
var svgdiv=$("#svgdiv");

svgdiv.css("display","block");

emailbutton.click(function(){
    if(emaildiv.css("display")==="none") {
        cleardiv();
        emaildiv.css("display", "block");
        emaildiv.css("animation", "fadeIn 2s");
        return;
    }
    emaildiv.css("display","none");
    svgdiv.css("display","block");
});

gamebutton.click(function(){
    if(gamediv.css("display")==="none") {
        cleardiv();
        gamediv.css("display", "block");
        gamediv.css("animation", "fadeIn 2s");
        return;
    }
    gamediv.css("display","none");
    svgdiv.css("display","block");
});


function cleardiv(){
    gamediv.css("display","none");
    emaildiv.css("display","none");
    svgdiv.css("display","none");
}

send.click(function(){
    $.ajax({
        url:'/',
        type:'POST',
        data:{
            useremail:useremail.val(),
            username:username.val(),
            usercontent:usercontent.val()
        },
        async:false,
        success:function(data){
            if(data==="ok"){
                console.log("邮件发送成功");
                useremail.val("");
                username.val("");
                usercontent.val("");
                $("span").text("邮件发送成功");
                setTimeout(function(){
                    $("span").text("");
                    emaildiv.css("display","none");
                    svgdiv.css("display","block");
                },1000)

            }
        },
        error:function(){
            console.log("邮件发送失败");
        }
    });
});

