function getNum(val) {
  var v = document.getElementById("output_res");

  v.innerHTML += val;
}

function Output() {
  let res = document.getElementById("output_res").innerHTML;
  let res2 = eval(res);
  document.getElementById("output_res").innerHTML = res2;
}

function clearAll() {
  document.getElementById("output_res").innerHTML = "";
}

function Delete() {
  let num = document.getElementById("output_res");
  num.innerHTML = num.innerHTML.slice(0, -1);
}
