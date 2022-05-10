function tinhDiem() {
    var score0 = document.getElementById("scoreOU").value;
    var score1 = document.getElementById("score1").value;
    var score2 = document.getElementById("score2").value;
    var score3 = document.getElementById("score3").value;
    var area = document.getElementById("area").value;
    var subject = document.getElementById("subject").value;
    var score = Number(score1) + Number(score2) + Number(score3);

    if ((score1 <= 0 || score2 <= 0 || score3 <= 0) || (score1 > 10 || score2 > 10  || score3 > 10)) {
        document.getElementById("printScore").innerHTML = "Bạn không trúng tuyển vào trường. <br>Vui lòng kiểm tra và nhập lại điểm nếu kết quả không đúng"
    } else {
        if (score0 <= 0) {
            document.getElementById("printScore").innerHTML = "Vui lòng nhập lại điểm chuẩn"
        } else {
            switch (check(area)) {
                case 0:
                    break;
                case 1:
                    score += 2;
                    break;
                case 2:
                    score += 1;
                    break;
                case 3:
                    score += 0.5;
                    break;
                default:
                    document.getElementById("printScore").innerHTML = "Vui lòng chọn khu vực"
                    return;
            }
            switch (check(subject)) {
                case 0:
                    break;
                case 1:
                    score += 2.5;
                    break;
                case 2:
                    score += 1.5;
                    break;
                case 3:
                    score += 1;
                    break;
                default:
                    document.getElementById("printScore").innerHTML = "Vui lòng chọn đối tượng"
                    return;
            }
            if (score >= score0) {
                document.getElementById("printScore").innerHTML = "Bạn trúng tuyển vào trường, tổng điểm đạt được: " + score;
            } else {
                document.getElementById("printScore").innerHTML = "Bạn không trúng tuyển vào trường, tổng điểm đạt được: " + score;
            }
        }
    }
}

function check(check) {
    if (check == 1){
        return;
    } else if (check == 2) {
        return 0;
    } else if (check == 3) {
        return 1;
    } else if (check == 4) {
        return 2;
    } else
        return 3;
}