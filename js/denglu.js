var int1=document.getElementsByTagName('input')[0];
var user=document.getElementsByTagName('input')[1];
var psd=document.getElementsByTagName('input')[2];
var btn=document.getElementById('submit');
btn.onclick=function() {
    var tel_= window.localStorage.getItem("tel");
    var user_=window.localStorage.getItem("user")
    var psd_ = window.localStorage.getItem("psd");
    if (int1.value == tel_ &&user.value == user_ && psd.value == psd_) {
      alert("登录成功");
      window.location.href = "./index.html";
    } else {
      alert("用户名/密码输入错误");
    }
}