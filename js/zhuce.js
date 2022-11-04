var int1=document.getElementsByTagName('input')[0];
var img_ = document.getElementsByTagName('input')[1];
var yan=document.getElementsByTagName('input')[2];
var user=document.getElementsByTagName('input')[3];
var psd = document.getElementsByTagName('input')[4];
var repsd = document.getElementsByTagName('input')[5];
var sub =document.getElementById('submit');
var span_=document.getElementsByClassName('a');
var a=false
int1.onblur = function() {
    var name = int1.value;
    var reg = /^1[3578]\d{9}$/
    if (!reg.test(name)) {
        a=false
        span_[0].innerHTML='手机号输入有误';
    }
    if (name == '') {
        a=false
        span_[0].innerHTML = '手机号不能为空';
    }
    if (reg.test(name)) {
        span_[0].style.color = 'pink'
        span_[0].innerHTML = '格式正确'
        a=true
    }
}
var b=false
img_.onblur = function() {
    var name=img_.value;
    if(name=='r2B7'){
        b=true
        span_[1].style.color = 'pink'
        span_[1].innerHTML='输入正确'
    }
    if(name !=='r2B7'){
        b=false
        span_[1].innerHTML='图片效验码不正确'
    }
}
var getCode=document.getElementsByClassName('getCode')[0];
var min=60;
var timer=null;
var flg=true;
var arry;
getCode.onclick = function() {
    clearInterval(timer)
    timer=setInterval(function() {
        min--;
        getCode.innerHTML='(' + min + '秒）重发';
        if (min < 0) {
            clearInterval(timer);
            min=60;
            getCode.innerHTML = '获取验证码';
        }
    },1000)
    if (flg) {
        flg = false;
        var arr = [];
        for (var i = 0; i < 4; i++) {
            arr[i] = Math.round(Math.random() * 4);
        }
        arry = arr.join('')
        alert(arry);
        setTimeout(function () {
            flg = true;
        }, 60000)
    }
}
var c=false;
yan.onblur = function () {
    var name = yan.value;
    var str = arry;
    console.log(typeof str);
    if (name == '') {
        c=false
        span_[2].innerHTML='验证码不能为空';
    }
    if (name !== str) {
        c=false
        span_[2].innerHTML='验证码输入错误'
    }

    if (name == str && name !== '') {
        span_[2].style.color='pink'
        span_[2].innerHTML='验证码正确'
        c=true;
    }

}
var d=false;
user.onblur=function() {
    var name=user.value;
    if(name==''){
        d=false
        span_[3].innerHTML='用户名不能为空'
    }else{
        d=true;
    }
}
var e=false;
psd.onblur=function() {
    var name=psd.value;
    var reg = /^\w{6,10}$/
    if (!reg.test(name)) {
        e=false
        span_[4].innerHTML = '请输入6-10位密码'
    }
    if (name == '') {
        e=false
        span_[4].innerHTML = '不能为空'
    }
    if (reg.test(name)) {
        span_[4].style.color = 'pink'
        span_[4].innerHTML = '密码格式输入正确'
        e=true;
    }
}
var f=false;
repsd.onblur = function () {
    var name = repsd.value
    var name1 = psd.value
    var reg = /^\w{6,10}$/
    if (!reg.test(name)) {
        f=false
        span_[5].innerHTML = '请输入正确格式'
    }
    if (name !== name1) {
        f=false
        span_[5].innerHTML = '两次密码不一致'
    }
    if (name === name1 && name !== '') {
        span_[5].style.color = 'pink'
        span_[5].innerHTML = '密码一致'
        f=true;
    }
}

sub.onclick=function() {
    if (a==true && b==true && c==true && d==true && e==true && f==true && e==true) {
        alert('成功')
        window.localStorage.setItem("tel", int1.value);
        window.localStorage.setItem("user", user.value);
        window.localStorage.setItem("psd", psd.value);
        setTimeout(function () {
            window.location.href = './denglu.html';
          }, 1000);
    } else {
        alert('注册失败')

    }
}