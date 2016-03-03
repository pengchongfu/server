var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');
var path=require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/resume',function(req,res,next){
  res.sendFile(path.join(__dirname, '../public', 'resume.html'));
});

router.get('/els',function(req,res,next){
  res.sendFile(path.join(__dirname, '../public', 'els.html'));
});

router.get('/map',function(req,res,next){
  res.sendFile(path.join(__dirname, '../public', 'map.html'));
});

router.get('/saolei',function(req,res,next){
  res.sendFile(path.join(__dirname, '../public', 'saolei.html'));
});

router.get('/tcs',function(req,res,next){
  res.sendFile(path.join(__dirname, '../public', 'tcs.html'));
});

router.post('/',function(req,res,next){
  res.json("ok");
  var useremail=req.body.useremail;
  var username=req.body.username;
  var usercontent=req.body.usercontent;

  var user="pengchongfu@126.com",pass="";
  var smtpTransport = nodemailer.createTransport({
    service:"126",
    auth:{
      user:user,
      pass:pass
    }
  });

  var mailOptions={
    from:"个人网站<"+user+">",
    to:"<pengchongfu@126.com>",
    html:'<b>邮箱：</b>'+useremail+'<br/>'+'<b>姓名：</b>'+username+'<br/>'+'<b>内容：</b>'+usercontent+'<br/>'
  }

  smtpTransport.sendMail(mailOptions,function(err,res){
    console.log("err:"+err);
  });
  return;
});


module.exports = router;
