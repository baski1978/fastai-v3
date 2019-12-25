var el = x => document.getElementById(x);

function showPicker() {
  el("file-input").click();
}

function showPicked(input) {
  el("upload-label").innerHTML = input.files[0].name;
  alert(input.files[0].name);
  var reader = new FileReader();
  reader.onload = function() {
    el("image-picked").src = reader.result;
    el("image-picked").className = "no-display";
  };
  reader.readAsDataURL(input.files[0]);
}

function analyze() {
  var uploadFiles = el("file-input").files;
  if (uploadFiles.length !== 1) alert("Please select a file to analyze!");

  el("analyze-button").innerHTML = "Analyzing...";
  var xhr = new XMLHttpRequest();
  var loc = window.location;
  xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,true);
   //xhr.timeout = 2000;
    alert(`${loc.protocol}//${loc.hostname}:${loc.port}/analyze`);
  xhr.onerror = function() {
    alert(xhr.responseText);
  };
  xhr.onload = function() {
    if (this.readyState === 4) {
      var response = JSON.parse(xhr.response);
      alert(xhr.response);
      el("result-label").innerHTML = `Result = ${response["result"]}`;
    }
    el("analyze-button").innerHTML = "Analyze";
  };

  var fileData = new FormData();
  fileData.append("file", uploadFiles[0]);
  xhr.send(fileData);
}

