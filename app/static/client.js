var el = x => document.getElementById(x);

function showPicker() {
  el("file-input").click();
}

function showPicked(input) {
  el("upload-label").innerHTML = input.files[0].name;
  var reader = new FileReader();
  reader.onload = function(e) {
    el("image-picked").src = e.target.result;
    el("image-picked").className = "";
  };
  reader.readAsDataURL(input.files[0]);
}

function analyze() {
  var uploadFiles = el("file-input").files;
  if (uploadFiles.length !== 1) alert("Please select a file to analyze!");

  el("analyze-button").innerHTML = "Analyzing...";
  var xhr = new XMLHttpRequest();
  var loc = window.location;
    xhr.timeout=2000;
 xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,true)
  // xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/predict/`,true);
  //  xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,true);predict

  xhr.onerror = function() {
    alert(xhr.responseText);
  };
  xhr.onload = function(ee) {
    if (this.readyState === 4) {
      var response = JSON.parse(ee.target.responseText);
      el("result-label").innerHTML = `Result = ${response["result"]}`;
    }
    el("analyze-button").innerHTML = "Analyze";
  };

  var fileData2 = new FormData();
  fileData2.append("file", uploadFiles[0]);
    xhr.send(fileData2);
}

