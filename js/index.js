
var sq = document.getElementsByClassName('shenqimg')[0]
var ren = document.getElementsByClassName('ren')[0]
var shu = document.getElementsByClassName('shu')[0]

sq.addEventListener("click", function () {
    ren.innerHTML = ren.innerHTML - 0 + 1;
    shu.innerHTML = shu.innerHTML - 0 - 1;
    if (shu.innerHTML == 0) {
        sq.disabled = true;
        sq.style.backgroundColor = "gray";
        sq.innerHTML = "暂无库存";
    }
});
var time = document.getElementsByClassName("time")[0];
// 倒计时双11时间
var futureData = new Date(2022, 10, 11, 00, 00, 00);
var timer = null;

timer = setInterval(function () {
    // 获取现在时间
    var now = new Date();
    // 动态拿到现在时间到双十一时间的毫秒数
    var jetTime = futureData - now;
    // 天数
    var day = timeFormatting(Math.floor(jetTime / 1000 / 60 / 60 / 24));
    // 小时
    var hour = timeFormatting(Math.floor((jetTime / 1000 / 60 / 60) % 24));
    // 分钟
    var minute = timeFormatting(Math.floor((jetTime / 1000 / 60) % 60));
    // 秒
    var second = timeFormatting(Math.floor((jetTime / 1000) % 60));
    time.innerHTML = `申请时间剩余：${day}天${hour}小时${minute}分钟${second}秒`;
    // 判断时间是否到双十一
    if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0) {
        clearInterval(timer);
        countDown.innerHTML = `双十一已到，大家开始狂欢吧！`;
    }
}, 1000);

// 封装时间格式化函数
function timeFormatting(time) {
    return time < 10 ? "0" + time : time;
}
// 发现酷玩
var ul_ = document.getElementById('myDiv')
var datalist = []
function ajax_() {
    var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("get", "http://127.0.0.1:3000/play/new", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                datalist = JSON.parse(xhr.response);
                // 遍历数据
                show();
            }
        }
    };
}
window.addEventListener("load", function () {
    ajax_();
});
var index = 0
function show() {
    for (var item of datalist[index]) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "##";


        var a_img = document.createElement("img");
        a_img.src = item.img;
        a_img.className = "content_pic";
        a.appendChild(a_img);



        var a_div = document.createElement('div');
        var a_divp = document.createElement("p");
        var a_span = document.createElement('span');
        a_div.className = 'info'
        a_divp.innerHTML = item.text;
        a_divp.className = 'name'
        a_span.innerHTML = item.description;
        a_divp.appendChild(a_span)
        a_div.appendChild(a_divp)

        var a_div_div1 = document.createElement('div');
        var a_div_div1_span1 = document.createElement('span');
        a_div_div1.className = 'tip fix'
        a_div_div1_span1.innerHTML = item.price;
        a_div_div1_span1.className = 'price left'
        a_div_div1.appendChild(a_div_div1_span1)




        var a_div_div2 = document.createElement('div');
        var a_div_div2_span1 = document.createElement('span');
        var a_div_div2_span2 = document.createElement('span');
        a_div_div2.className = 'right icon'
        a_div_div2_span1.innerHTML = item.like
        a_div_div2_span1.className = "look";
        a_div_div2_span2.innerHTML = item.words
        a_div_div2_span2.className = "xin";
        a_div_div2.appendChild(a_div_div2_span1)
        a_div_div2.appendChild(a_div_div2_span2)

        a_div_div1.appendChild(a_div_div2)
        a_div.appendChild(a_div_div1)
        a.appendChild(a_div);
        li.appendChild(a);
        ul_.appendChild(li);
        a_img.addEventListener("click", function () {
            window.location.href = "./try/tryProduct.html";
        });
    }
}
var bth = document.getElementsByClassName('more-btn ')[0]

bth.onclick = function () {
    index++;
    if (index < datalist.length) {
        setTimeout(function () {
            show();

        }, 1000);
    }
    if (index == datalist.length - 1) {
        setTimeout(function () {
            bth.innerHTML = '没有更多了'
        }, 1000);
    }
};
var zan = document.getElementsByClassName('zan')

for (var item of zan) {
    var flg = true
    item.onclick = function () {
        var praiseNum = this.innerHTML;
        if (flg) {
            praiseNum++;
            flg = false;
            this.style.background = "url(./css/img/use5.png) 5px 2px / 14px no-repeat";
        } else {
            praiseNum--;
            flg = true;
            this.style.background = 'url(./css/img/zan.png) 5px 2px / 14px no-repeat'
        }
        this.innerHTML = praiseNum;

    }
}
var xin = document.getElementsByClassName('xin')
console.log(xin);
for (var item1 of xin) {
    var flg = true
    item1.onclick = function () {
        var praiseNum1 = this.innerHTML;
        if (flg) {
            praiseNum1++;
            flg = false;
            this.style.background = "url(./css/img/xinRedh.png) 5px 2px / 14px no-repeat ";

        } else {
            praiseNum1--;
            flg = true;
            this.style.background = 'url(./css/img/xin.png) 5px 2px / 14px no-repeat'
            '../css/img/xin.png'

        }
        this.innerHTML = praiseNum1;

    }
}
var shopImgs = document.getElementsByTagName('img')

// 遍历全部的img路径跳转
// 改跳转路径
for (let item of shopImgs) {
    item.addEventListener("click", function () {
        window.location.href = "./shop/shopProduct.html";

    });
}












