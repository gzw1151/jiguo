
// 发现酷玩
var ul_ = document.getElementById('myDiv')
function ajax_() {
    var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("get", "http://127.0.0.1:3000/play/hot", true);
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