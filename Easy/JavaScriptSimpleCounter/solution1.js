import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = `<div id="mainArea">
  button count: <span>0</span>
  <button id="mainButton">Increase</button>
</div>`;

$('#mainButton').click(function() {
    $('#mainArea span').html(function(i, val) { return val*1+1 });
});