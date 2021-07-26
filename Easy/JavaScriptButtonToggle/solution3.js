const rootApp = document.getElementById("root");
rootApp.innerHTML = '<button id="button">ON</button>';

const takeButton = document.getElementById("button");
takeButton.addEventListener('click', function(){
  if (takeButton.innerText === 'ON'){
    takeButton.innerText = 'OFF';
  }else{
    takeButton.innerText = 'ON';
  }

})