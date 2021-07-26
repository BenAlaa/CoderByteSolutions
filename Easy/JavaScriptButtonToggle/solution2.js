import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = '<button>ON</button>';
const element = $('#root button');
element.on('click',()=>{
  const value=element.text(); 
  if(value === "ON") {
    element.text("OFF");
  }
  else if(value==="OFF") {
    element.text("ON");
  }
})