/* 轮播 */
function LB(box, img, left, right, span, i) {
    var oCen = document.getElementById(box);
    var aImg = oCen.getElementsByTagName(img);
    var oLeft = document.getElementById(left);
    var oRight = document.getElementById(right);
    var oSpan = document.getElementsByClassName(span);

    var t = 0;
    var tim = 0;
    var a = 0;
    var er = 0;
    //a代表box b代表图片 c代表步长 off代表左右
    function mov(a, b, c, off) {

        let y = 0


        let lk = 0

        clearInterval(er);
        er = setInterval(function () {
            clearInterval(tim);
            if (off == "right") {
                t = c;

            }
            if (off == "left") {
                t = -c;
            }

            a.style.left = parseInt(getComputedStyle(a).left) + t + "px";

            dian();
            if (parseInt(getComputedStyle(a).left) % parseInt(getComputedStyle(b[0]).width) == y) {
                ret(3);
                clearInterval(er);
            }
            if (i == 0) {
                if (parseInt(getComputedStyle(a).left) == -parseInt(getComputedStyle(b[0]).width) * (b.length -
                        1)) {
                    a.style.left = -parseInt(getComputedStyle(b[0]).width) + "px";
                }
            } else {
                if (parseInt(getComputedStyle(a).left) == -parseInt(getComputedStyle(b[0]).width) * (b.length - 1 -
                        i)) {
                    a.style.left = -parseInt(getComputedStyle(b[0]).width) + "px";
                }
            }

            if (i == 0) {
                if (parseInt(getComputedStyle(a).left) == 0) {
                    a.style.left = -((b.length - 2) * parseInt(getComputedStyle(b[0]).width)) + "px";
                }
            } else {
                if (parseInt(getComputedStyle(a).left) > -1200) {
                    a.style.left = -((b.length - 3) * parseInt(getComputedStyle(b[0]).width)) + "px";
                }
            }



        }, 1)

    }

    function ret(n) {
        clearInterval(tim);
        tim = setInterval(function () {
            mov(oCen, aImg, 5, "left");

        }, 1000 * n)
    }
    ret(3);
    oCen.onmouseover = function () {
        a
        clearInterval(tim);
    }
    oCen.onmouseout = function () {
        ret(3);
    }
    oLeft.onclick = function () {

        if (parseInt(getComputedStyle(oCen).left) % parseInt(getComputedStyle(aImg[0]).width) == 0) {
            clearInterval(tim);
            mov(oCen, aImg, 5, "right");
            ret(3)
        }


    }
    oRight.onclick = function () {
        if (parseInt(getComputedStyle(oCen).left) % parseInt(getComputedStyle(aImg[0]).width) == 0) {
            clearInterval(tim);
            mov(oCen, aImg, 5, "left");
            ret(3)
        }
    }

    function qk(s) {
        for (var m = 0; m < oSpan.length; m++) {
            s[m].style.background = "";
        }
    }
    oSpan[0].style.background = "#fb7905";
    dian();

    function dian() {
        let Dlen = oSpan.length;
        for (var m = 0; m < Dlen; m++) {
            if (parseInt(getComputedStyle(oCen).left) == -(m + 1) * parseInt(getComputedStyle(aImg[0]).width)) {
                qk(oSpan);
                oSpan[m].style.background = "#fb7905";
            }
        }
        if (parseInt(getComputedStyle(oCen).left) == -(Dlen + 1) * parseInt(getComputedStyle(aImg[0]).width)) {
            qk(oSpan);
            oSpan[0].style.background = "#fb7905";
        }
        if (parseInt(getComputedStyle(oCen).left) == 0) {
            qk(oSpan);
            oSpan[Dlen - 1].style.background = "#fb7905";
        }
    }
    for (var c = 0; c < oSpan.length; c++) {
        oSpan[c].index = c + 1;
        oSpan[c].onclick = function () {
            if (parseInt(getComputedStyle(oCen).left) % parseInt(aImg[0].width) == 0) {
                clearInterval(tim);
                oCen.style.left = -parseInt(getComputedStyle(aImg[0]).width) * this.index + "px";
                dian();
                ret(3)
            }
        }
    }

}
LB("cen", "img", "left", "right", "boxspan", 0);
LB("HotDiv2", "li", "Hotleft", "Hotright", "hotboxspan", 2);

/* LB("HotDiv3","li","Hotleft2","Hotright2","hotboxspan",2);
LB("HotDiv4","li","Hotleft3","Hotright3","hotboxspan",2);
LB("HotDiv5","li","Hotleft4","Hotright4","hotboxspan",2);
LB("HotDiv6","li","Hotleft5","Hotright5","hotboxspan",2);
 */
/* for(let o=0;o<aRenMenLi.length;o++){
    aRenMenLi[o].onclick=function(){
        for(let j=0;j<aRenMenLi.length;j++)
        {
            aRenMenDiv[j].style.display="none";
        }
        aRenMenDiv[o].style.display="block";
        return false;
    }
} */

let arr = [
    ['./image/5.jpg', './image/6.jpg', './image/4.jpg'],
    ['./image/23.jpg', './image/24.jpg', './image/25.jpg'],
    ['./image/26.jpg', './image/27.jpg', './image/28.jpg'],
    ['./image/29.jpg', './image/30.jpg', './image/31.jpg'],
    ['./image/32.jpg', './image/33.jpg', './image/34.jpg']
];

function XXK(arr, i) {
    let aRenMenLi = document.querySelectorAll(".HotSpan1A");
    let aRenIMG = document.querySelectorAll(".HotDiv2img");
    aRenMenLi[i].onclick = function () {
        for (let k = 0; k < aRenMenLi.length; k++) {
            aRenMenLi[k].style.background = 'none';
            aRenMenLi[k].style.border = '1px solid #999999';
            aRenMenLi[k].style.color = '#999999';
        }
        aRenMenLi[i].style.background = 'rgb(208, 26, 33)';
        aRenMenLi[i].style.border = '1px solid rgb(208, 26, 33)';
        aRenMenLi[i].style.color = 'white';
        aRenIMG[0].src = arr[0];
        aRenIMG[1].src = arr[1];
        aRenIMG[2].src = arr[2];
        aRenIMG[3].src = arr[0];
        aRenIMG[4].src = arr[1];
        aRenIMG[5].src = arr[2];
        aRenIMG[6].src = arr[1];
        return false;
    }
}
XXK(arr[0], 0);
XXK(arr[1], 1);
XXK(arr[2], 2);
XXK(arr[3], 3);
XXK(arr[4], 4);




/* 团队选项卡 */
let aLi = document.querySelectorAll('.TemDivRightLi');
let aDiv = document.querySelectorAll('.TemDivLeft1');

for (let i = 0; i < aLi.length; i++) {
    aLi[i].onclick = function () {
        for (let j = 0; j < aDiv.length; j++) {

            aDiv[j].style.opacity = 0;
            aDiv[j].style.zIndex = 0;
            aDiv[j].id = "";
        }
        aDiv[i].style.opacity = 1;
        aDiv[i].style.zIndex = 5;
        aDiv[i].id = "Dhua1"
    }

}




/* 动画 */
function Fn(a, b) {
    let odiv = document.querySelector(a);
    let odiv2 = document.getElementsByClassName(b);
    odiv.onmouseover = function () {
        this.style.width = "450px";
        this.style.cursor = 'pointer';

        for (let i = 0; i < odiv2.length; i++) {
            odiv2[i].style.width = "50px";
        }

    }
    odiv.onmouseout = function () {
        this.style.width = "150px";
        for (let i = 0; i < odiv2.length; i++) {
            odiv2[i].style.width = "150px";
        }
    }
}

Fn(".t0", 't1');
Fn(".i2", 'i1');
Fn(".c0", 'c1');
Fn(".d0", 'd1');


/* 返回顶部按钮 */

function FangHui(FixedDiv) {
    var oBtn = document.getElementById(FixedDiv);
    onscroll = function () {
        var oTop = document.documentElement.scrollTop;
        if (oTop > 900) {
            oBtn.style.bottom = "50px"
        } else {
            oBtn.style.bottom = "-50px"
        }
    }

    var time = 0;

    oBtn.onclick = function () {
        clearInterval(time);
        time = setInterval(aa, 5)
    }

    function aa() {
        var oTop1 = document.documentElement.scrollTop;
        oTop1 -= 50;
        if (oTop1 > 0) {
            scrollTo(0, oTop1)
        } else {
            scrollTo(0, 0);
            clearInterval(time);
        }
    }

}
FangHui("FixedDiv")


let FixedDiv = document.querySelector('#FixedDiv');
let FixedDivImg = FixedDiv.querySelector('img');

FixedDiv.onmouseover = function () {
    FixedDivImg.src = './image/fanhui22.png';
}
FixedDiv.onmouseout = function () {
    FixedDivImg.src = './image/fanhuidingbu.png';
}




let BanDb = document.querySelector(".BanDb");
let BanDbA = BanDb.querySelectorAll("a");

function SXlink(i,q){
   
    BanDbA[i].onclick = function () {
        var ix = document.documentElement.scrollTop;
        clearInterval(onoff);
        var onoff = setInterval(function () {
            ix = ix + 40
            scrollTo(0, ix)
            if (document.documentElement.scrollTop > q) {
                scrollTo(0, q)
                clearInterval(onoff);
            }
        }, 4)
        return false;
    }
}


SXlink(0,738);
SXlink(1,1657);
SXlink(2,2490);
SXlink(3,3152);
SXlink(4,3753);
