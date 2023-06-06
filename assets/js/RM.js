var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");

var rotateValue = circle.style.transform;
// console.log(rotateValue);
var rotateSum;


upbtn.onclick = function() {
    // /時計回りに90度回転。/ 
    rotateSum = rotateValue + "rotate(-90deg)";
    // このままだとただ代入しただけ（rotateSumに入れただけ。）。ここからCSSに適応させていく。
    circle.style.transform = rotateSum;
    // このままだと０とー９０がroatteSumに入っただけ。ー９０傾けた状態からrotateValueに適応させる。
    rotateValue = rotateSum;
};

downbtn.onclick = function() {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum
}

