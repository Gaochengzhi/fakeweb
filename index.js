function time1() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var timeOfHour = date.getHours() - 2;
    if (timeOfHour >= 0 && timeOfHour <= 9) {
        timeOfHour = "0" + timeOfHour;
    }
    var currentDate = date.getFullYear() + "-" + month + "-" + strDate
        + " " + timeOfHour + ":00:00";
    return currentDate;
}

function time2() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0"+strDate;
    }

    var timeOfHour = date.getHours() + 2;
    if (timeOfHour >= 0 && timeOfHour <= 9) {
        timeOfHour = "0" + timeOfHour;
    }
    var currentDate = date.getFullYear() + "-" + month + "-" + strDate
        + " " + timeOfHour + ":00:00";
    return currentDate;
}
function time3() {
    var curDate = new Date();
    var date = new Date(curDate.getTime() - 24 * 60 * 60 * 1000);
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var timeOfHour = date.getHours();
    if (timeOfHour >= 0 && timeOfHour <= 9) {
        timeOfHour = "0" + timeOfHour;
    }
    var currentDate = date.getFullYear() + "-" + month + "-" + strDate
        + " " + timeOfHour + ":00:00";
    return currentDate;
}
function things(){
    var a  = ["大四外出实习","去超市购买生活用品","在合肥本地探望亲戚","外地朋友请吃饭","看牙医，洗牙","身份证到期办理身份证"];
    var num = Math.ceil(Math.random()*10);
    var res = a[num%a.length];
    return res;
}
a = time1();
b = time2();
c = time3();
d = things();
document.getElementById("time1").innerHTML = a;
document.getElementById("time2").innerHTML = b;
document.getElementById("time3").innerHTML = c;
document.getElementById("res").innerHTML = d;
