function lw() {
  var i = document.getElementById("input").value;
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://192.168.43.229/cgi-bin/docker.py?cmd=" + i, true);
  xhr.send();
  xhr.onload = function () {
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML = output;
  };
}

function lw2() {
  var i = document.getElementById("input").value;
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://192.168.218.6/cgi-bin/k8s.py?cmd=" + i, true);
  xhr.send();
  xhr.onload = function () {
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML = output;
  };
}

function lw3() {
  var i = document.getElementById("input1").value;
  var j = document.getElementById("input2").value;
  var xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "http://192.168.218.6/cgi-bin/k8s.py?cmd1=" + i + "&" + "cmd2=" + j,
    true
  );
  xhr.send();
  xhr.onload = function () {
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML = output;
  };
}

function lw4() {
  var cmd3 = document.getElementById("input4").value;

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://192.168.218.6/cgi-bin/k8s.py?cmd3=" + cmd3, true);
  console.log(cmd3);
  xhr.send();
  xhr.onload = function () {
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML = output;
  };
}

function lw5() {
  var cmd4 = document.getElementById("input5").value;
  var cmd5 = document.getElementById("input6").value;

  var xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "http://192.168.218.6/cgi-bin/k8s.py?cmd4=" + cmd4 + "&" + "cmd5=" + cmd5,
    true
  );
  xhr.send();
  xhr.onload = function () {
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML = output;
  };
}

function lw6() {
  var cmd6 = document.getElementById("input7").value;
  var cmd7 = document.getElementById("input8").value;

  var xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "http://192.168.218.6/cgi-bin/k8s.py?cmd6=" + cmd6 + "&" + "cmd7=" + cmd7,
    true
  );
  xhr.send();
  xhr.onload = function () {
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML = output;
  };
}

function lw7() {
  var cmd8 = document.getElementById("input9").value;
  var cmd9 = document.getElementById("input10").value;

  var xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "http://192.168.218.6/cgi-bin/k8s.py?cmd8=" + cmd8 + "&" + "cmd9=" + cmd9,
    true
  );
  xhr.send();
  xhr.onload = function () {
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML = output;
  };
}

function lw8() {
  var cmd10 = document.getElementById("input11").value;

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://192.168.218.6/cgi-bin/k8s.py?cmd10=" + cmd10, true);

  xhr.send();
  xhr.onload = function () {
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML = output;
  };
}
function lw9() {
  var cmd11 = "sda";

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://192.168.218.6/cgi-bin/k8s.py?cmd11=" + cmd11, true);
  xhr.send();
  xhr.onload = function () {
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML = output;
  };
}

function pagechange() {
  window.location.href = "http://127.0.0.1:5500/kubernetes.html";
}
