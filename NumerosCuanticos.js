function getNumerosCuanticos(numero, serrucho) {
  let resp = {
    n: 1,
    l: {
      value: 1,
      especial: false,
    },
    m: {
      value: 0,
      range: [0],
    },
    s: {
      value: "-1/2",
    },
  };

  // calcular numero n o principal
  resp.n = serrucho.mayorCoeficiente;

  // calcular numero l o secundario
  let ultimo_serrucho = serrucho.array[serrucho.array.length - 1];
  if (ultimo_serrucho.split("s").length > 1) {
    resp.l.value = 0;
  }
  if (ultimo_serrucho.split("p").length > 1) {
    resp.l.value = 1;
  }
  if (ultimo_serrucho.split("d").length > 1) {
    resp.l.value = 2;
  }
  if (ultimo_serrucho.split("f").length > 1) {
    resp.l.value = 3;
  }
  if (resp.n < resp.l.value) {
    resp.l.especial = true;
    resp.l.value = resp.n - 1;
  }

  // calcular numero m o magnetico y s o espin
  resp.m.range = [];
  if (resp.l.value === 0) resp.m.range.push(0);
  for (let m = resp.l.value * -1; m < resp.l.value * 2; m++) {
    resp.m.range.push(m);
  }
  let m_index = getSerruchoExponent(serrucho.array[serrucho.array.length - 1]);
  if (m_index > resp.m.range.length) {
    m_index = m_index - resp.m.range.length;
    resp.s.value = "1/2";
  }
  resp.m.value = resp.m.range[m_index - 1];
  return resp;
}

function getSerruchoExponent(element) {
  if (element.includes("s")) {
    element = element.split("s");
    return parseInt(element[1]);
  }
  if (element.includes("p")) {
    element = element.split("p");
    return parseInt(element[1]);
  }
  if (element.includes("d")) {
    element = element.split("d");
    return parseInt(element[1]);
  }
  if (element.includes("f")) {
    element = element.split("f");
    return parseInt(element[1]);
  }
}
