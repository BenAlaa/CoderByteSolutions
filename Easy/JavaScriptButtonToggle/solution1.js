import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = '<button>ON</button>';

let toggle = true;
const button = $('#root button');

button.on('click', () => {
  toggle = !toggle;
  const buttonText = toggle ? 'ON' : 'OFF';
  button.text(buttonText);
})