
function alertaimagen() {
  alert('Usted hizo click en REDES SOCIALES. Presione enter para continuar');
}

document.getElementById('si').onclick = function() {
  document.getElementById('gracias').innerText = "Gracias! tu opinion nos ayuda a mejorar!"
}

document.getElementById('no').onclick = function() {
  document.getElementById('gracias').innerText = "Gracias por tu opinion! la proxima intentaremos hacerlo mejor!"
}    
  
setInterval(function() {
  var elem = document.getElementById("blinking");
  if (elem.style.visibility === "hidden") {
    elem.style.visibility = "visible";
  } else {
    elem.style.visibility = "hidden";
  }
}, 500);