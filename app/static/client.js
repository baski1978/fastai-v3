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
  var xhr22 = new XMLHttpRequest();
  var loc = window.location;
  xhr22.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyzex`,true);
  // xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/predict/`,true);
  //  xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,true);predict

  xhr22.onerror = function() {
    alert(xhr22.responseText);
  };
  xhr22.onload = function(ee) {
    if (this.readyState === 4) {
      var response = JSON.parse(ee.target.responseText);
      el("result-label").innerHTML = `Result = ${response["result"]}`;
    }
    el("analyze-button").innerHTML = "Analyze";
  };

  var fileData2 = new FormData();
  fileData2.append("file", uploadFiles[0]);
    xhr22.send(fileData2);
}

