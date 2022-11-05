
// 发现酷玩
var ul_ = document.getElementById('myDiv')
function ajax_() {
    var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("get", "http://127.0.0.1:3000/report/new", true);
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

var index = 0
function show() {
    for (var item of datalist) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "##";


        var a_img = document.createElement("img");
        a_img.src = item.img;
        a.appendChild(a_img);



        var a_div = document.createElement('div');
        var a_divp = document.createElement("p");
        a_div.className = 'info'
        a_divp.innerHTML = item.text;
        a_divp.className = 'title1'
        a_div.appendChild(a_divp)



        var a_div_div1 = document.createElement('div');

        a_div_div1.className = 'btm'
        var a_div_btmdiv = document.createElement('div');
        a_div_btmdiv.className = 'userInfo left'
        var a_div_div1_span1 = document.createElement('span');



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
    ajax_()
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
            this.style.background = "url(../css/img/use5.png) 1px 2px / 12px no-repeat";
        } else {
            praiseNum--;
            flg = true;
            this.style.background = 'url(../css/img/zan.png)1px 2px / 12px no-repeat'
        }
        this.innerHTML = praiseNum;

    }
}
var xin = document.getElementsByClassName('xin')

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
