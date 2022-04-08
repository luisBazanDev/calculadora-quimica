function calculateWithNumber() {
  let numero_atomico = document.getElementById('numero-atomico').value;
  if(isNaN(numero_atomico) || numero_atomico == 0 || numero_atomico>118)return;
  let serrucho = getSerrucho(numero_atomico);
  let numeros_cuanticos = getNumerosCuanticos(numero_atomico, serrucho);
  let elementData = getElementData(numero_atomico);
  document.getElementById('regla-serrucho').innerHTML = serrucho.array.join(' ');
  document.getElementById('nc-principal').innerHTML = numeros_cuanticos.n;
  document.getElementById('nc-secundario').innerHTML = numeros_cuanticos.l.value;
  document.getElementById('nc-magnetico').innerHTML = numeros_cuanticos.m.value;
  document.getElementById('nc-espin').innerHTML = numeros_cuanticos.s.value;
  document.getElementById('element-name').innerHTML = elementData.nombre;
  document.getElementById('element-simbolo').innerHTML = elementData.simbolo;
  document.getElementById('simbolo-quimico').value = elementData.simbolo;
}

function calculateWithSimbol() {
  let simbolo = document.getElementById('simbolo-quimico').value;
  let numero_atomico = getNumeroAtomico(simbolo);
  if(numero_atomico== null)return;
  document.getElementById('numero-atomico').value = numero_atomico;
  calculateWithNumber();
}