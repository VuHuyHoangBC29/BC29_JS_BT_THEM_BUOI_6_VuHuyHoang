/**
 * Bài 5:
 */
function getEle(id) {
    return document.getElementById(id);
}

getEle("btnBai5").onclick = function () {
    var n = getEle("soN_5").value * 1;
    var result="";
    for (i = 0; i <= n; i++) {
        if (i % 1 === 0 && i % i === 0) {
            result += i + " ";
        }
    }
    getEle("footerBai5").innerHTML = result + "";
}