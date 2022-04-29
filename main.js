/**
 * Bài 5:
 */
function getEle(id) {
    return document.getElementById(id);
}

function xetSoNguyenTo(i) {
    var result;
    if (i % j === 0 && i % j ===0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

getEle("btnBai5").onclick = function () {
    var n = getEle("soN_5").value * 1;
    var soNguyenTo = xetSoNguyenTo;
    var result ="";
    for (i = 0; i <= n; i++) {
        for (j = 0; j <= i; j++) {
            if (soNguyenTo) {
                result += i + " ";
            } else {
                result += "";
            }
        }
    }
    getEle("footerBai5").innerHTML = result + "";
}