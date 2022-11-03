var int1=document.getElementsByTagName('input')[0];
var img_ = document.getElementsByTagName('input')[1];
var yan=document.getElementsByTagName('input')[2]
var psd = document.getElementsByTagName('input')[3];
var repsd = document.getElementsByTagName('input')[4];
var sub = document.getElementsByClassName('bt')[0];
int1.onblur = function() {
    var name = int1.value
    var reg = /^1[3578]\d{9}$/
    if (!reg.test(name)) {
        alert('手机号输入有误')
    }
    if (name == '') {
        alert('手机号不能为空')
    }
    if (reg.test(name)) {
        alert('输入正确')
        return true;
    }
}
img_.onblur = function() {
    var name=img_.value
    if(name=='r2B7'){
        alert('输入正确')
    }
    if(name !=='r2B7'){
        alert('请重新输入')
        return true;
    }
}