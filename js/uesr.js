var ul_ = document.getElementById('myDiv')
var datalist = []
function ajax_() {
    var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("get", "http://127.0.0.1:3000/useing/public", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                datalist = JSON.parse(xhr.responseText);
                // 遍历数据
                show();
            } else {
                console.log("请求错误");
            }
        }
    };
}
window.addEventListener("load", function () {
    ajax_();
});
function show() {
    var str = "";
    for (var item of datalist) {
        str += `
     <li>
     <a href="use/detail.html">
         <span class="top-tip shoufa">首发</span>
         <img src=${item.img} />
         <div class="hot-con">
             <h2 class="name">${item.text}</h2>
             <p class="tabs red">
                 <span>${item.totalnum}</span>
                 <span>${item.num}</span>
             </p>
             <p class="sq"><span>${item.apply}</span>申请</p>
             <p class="current red">剩余时间2天</p>
             <p class="hui">报告数量：8</p>
         </div>
     </a>
 </li>
    `;
    }
    ul_.innerHTML += str;
}
var bth = document.getElementsByClassName('more-btn ')[0]
var index = 0
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