$(document).ready(function(){  
    var container = document.getElementById("slide_container");
    var pic_list = document.getElementById("slide_pic");
    var prev = document.getElementById("leftmove");
    var next = document.getElementById("rightmove");
    var animated = false;

    function animate(offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var newleft = parseInt(pic_list.style.left) + offset;
        var time = 800;
        var inteval = 10;
        var speed = offset/(time/inteval);

        function go(){
            if ( (speed < 0 && parseInt(pic_list.style.left) > newleft) || (speed > 0 && parseInt(pic_list.style.left) < newleft)) {
                pic_list.style.left = parseInt(pic_list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                pic_list.style.left = newleft + 'px';
                if(parseInt(pic_list.style.left) > 0) {
                    pic_list.style.left = -1588 + 'px'; 
                }
                if(parseInt(pic_list.style.left) < -1588) {
                    pic_list.style.left = 0 + 'px';
                }
                animated = false;
            }
            
        }
        go();
    }

    var timer;
    // function play() {
    //     timer = setInterval(function(){
    //         next.onclick();
    //     },3000);
    // }
    function play() {
        timer = setTimeout(function () {
            next.onclick();
            play();
        }, 3000);
    }

    function stop() {
        clearTimeout(timer);
    }

    play();
    container.onmouseover = stop;
    container.onmouseout = play;

    next.onclick = function() {
        animate(-397);
    }
    
    prev.onclick = function() {
        animate(397);
    }

    // --------------------tab开始--------------------
    var tab_li = document.getElementsByClassName("tab_li");
    var tab_div = document.getElementsByClassName("tab_div");

    for(var i=0;i<tab_li.length;i++) {
        tab_li[i].index = i;
        //console.log(i);
        tab_li[i].onclick = function() {
            //console.log("45646");
            for(var j=0;j<tab_li.length;j++) {
                tab_li[j].className = "off tab_li";
                // console.log(j);
                // console.log(tab_li[j].className);
                tab_div[j].className = "hide tab_div";
            }
            this.className = "on tab_li";
            tab_div[this.index].className = "show tab_div";
        }
    }

// --------------------tab结束--------------------

// -----------------find----------------

$("#search-button").click(function() {
    var val = $("#search").val(); // 获取搜索词
    if (val.length > 0) {
        console.log(val);
        $(".nav-1").hide(); 
        $(".nav-1:contains(" + val + ")").show(); 
    } else {
        alert("输入为空");
    }
});
// --------------登录注册------------------
// API host
var api_host = 'http://120.77.34.120:8080';
// API 地址
var api_urls = {
    // 获取验证码 API 地址
    get_verify_code: api_host + '/auth/verifyCode',
    //注册地址
    register: api_host + '/auth/register',
    //登录地址
    login: api_host + '/auth/login'
};





});
