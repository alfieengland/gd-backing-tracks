function afterPageLoads() {
  var btnGuitar = document.getElementById('btnGuitar');
  btnGuitar.addEventListener('click', btnGuitar)
}

function btnGuitar() {
  var btnGuitar = document.getElementById('btnGuitar');
  btnGuitar.firstChild.nodeValue = 'sametbh';
}

document.addEventListener('DOMContentLoaded', afterPageLoads);
