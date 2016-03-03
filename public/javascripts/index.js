var useremail=$("#useremail");
var username=$("#username");
var usercontent=$("#usercontent");
var send=$("#send");
var emailbutton=$("#emailbutton");
var emaildiv=$("#emaildiv");

emailbutton.click(function(){
    if(emaildiv.css("display")==="none") {
        emaildiv.css("display", "block");
        emaildiv.css("animation", "fadeIn 2s");
        return;
    }
    emaildiv.css("display","none");
});




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
                $("span").text("邮件成功发送");
                setTimeout(function(){
                    $("span").text("");
                    emaildiv.css("display","none");
                },1000)

            }
        },
        error:function(){
            console.log("邮件发送失败");
        }
    });
});

