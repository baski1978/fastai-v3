<html lang='en'>
<head>
  <meta charset='utf-8'>
  <link rel='stylesheet' href='../static/style.css'>
  <script src='../static/client.js'></script>
</head>
<body>
<div>
  <div class='center'>
    <div class='title'>Classify Leaf Images</div>
    <p>
      Use images of <strong>betel</strong> Leaf, <strong>insulin</strong> Leaf, <strong>tobacco</strong> Leaf or  <strong>tulsi</strong>   </p>
    <div class='content'>
      <div class='no-display'>
        <input id='file-input'
               class='no-display'
               type='file'
               name='file'
               accept='image/*'
               onchange='showPicked(this)'>
      </div>
      <button class='choose-file-button' type='button' onclick='showPicker()'>Select Image</button>
      <div class='upload-label'>
        <label id='upload-label'>No file chosen</label>
      </div>
      <div>
        <img id='image-picked' class='no-display' alt='Chosen Image' height='200'>
      </div>
      <div class='analyze'>
        <button id='analyze-button' class='analyze-button' type='button' onclick='analyze()'>Analyze</button>
      </div>
      <div class='result-label'>
        <label id='result-label'></label>
      </div>
    </div>
  </div>
</div>
</body>
</html>
