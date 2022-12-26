function add() {
    var num1, num2, sum;
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    sum = num1 + num2;
    document.getElementById("total").value = sum;
  }