import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = `<div id="mainArea">
  button count: <span class="counter">0</span>
  <button id="mainButton">Increase</button>
</div>`;

let count = 0;
$('#mainButton').click(() => {
  count++;
  $('.counter').html(count);
});