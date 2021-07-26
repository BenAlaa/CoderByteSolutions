const rootApp = document.getElementById('root');

rootApp.innerHTML = 
`<div id = "mainArea">
  button count: <span id = "countSpan"> 0 </span>
  <button id = "mainButton"> Increase </button>
</div>`;

let count = 0;

const mainButton = document.querySelector('#mainButton');

mainButton.addEventListener('click', () => {
  count++;
  document.querySelector('#countSpan').innerText = count;
});