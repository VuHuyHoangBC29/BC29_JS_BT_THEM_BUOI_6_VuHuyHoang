/**
 * Bài 5:
 */
function getEle(id) {
    return document.getElementById(id);
}

function xetSoNguyenTo(m) {
    var count = 0;
    for (n = 1; n <= m; n++) {
        if (m % n === 0) {
            count += 1;
        } else {
            count += 0;
        }
    }
    return count;
}

getEle("btnBai5").onclick = function () {
    var n = getEle("soN_5").value * 1;
    var result = "";
    for (i = 1; i <= n; i++) {
        var soNguyenTo = xetSoNguyenTo(i);
        if (i !== 1 && i > 0 && soNguyenTo <= 2) {
            result += i + ' ';
        } else if (soNguyenTo > 2) {
            result += ''; 
        }
    }
    getEle("footerBai5").innerHTML = "Các số nguyên tố là: " +  result;
}