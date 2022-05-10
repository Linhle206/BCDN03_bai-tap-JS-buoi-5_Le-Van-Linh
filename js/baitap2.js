function bill() {
    var name = document.getElementById("name").value;
    var KW = document.getElementById("KW").value;
    console.log(name);
    money = 0;

    if (name == "") {
        document.getElementById("result").innerHTML = "Vui lòng nhập lại tên"
    } else {
        if (KW <= 0) {
            document.getElementById("result").innerHTML = "Vui lòng nhập lại số KW"
        } else {
            switch (check(KW)) {
                case 0:
                    money = KW * 500;
                    break;
                case 1:
                    money = 50 * 500 + (KW - 50) * 650;
                    break;
                case 2:
                    money = 50 * 500 + 50 * 650 + (KW - 100) * 850;
                    break;
                case 3:
                    money = 50 * 500 + 50 * 650 + 100 * 850 + (KW - 200) * 1100;
                    break;
                case 4:
                    money = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (KW - 350) * 1300;
                    break;
            }
            document.getElementById("result").innerHTML = "Họ và tên: " + name + "<br>Số tiền cần thanh toán: " + money.toLocaleString();
        }
    }
}

function check(kw) {
    if (kw <= 50) return 0;
    else if (kw <= 100) return 1;
    else if (kw <= 200) return 2;
    else if (kw <= 350) return 3;
    else return 4;
}