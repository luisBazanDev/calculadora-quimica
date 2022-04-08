function getSerrucho(numero) {
  let resp = [];
  let sIndex = 1;
  let pIndex = 2;
  let dIndex = 3;
  let fIndex = 4;
  let mayorCoeficiente = 1;
  let serrucho = [
    "s",
    "s",
    "p",
    "s",
    "p",
    "s",
    "d",
    "p",
    "s",
    "d",
    "p",
    "s",
    "f",
    "d",
    "p",
    "s",
    "f",
    "d",
    "p",
    "f",
    "d",
    "f",
  ];
  serruchoIndex = 0;

  while (numero > 0) {
    const letter = serrucho[serruchoIndex];
    if (letter === "s") {
      if(sIndex > mayorCoeficiente) mayorCoeficiente = sIndex;
      if (numero >= 2) {
        resp.push(`${sIndex}s2`);
        sIndex++;
        numero -= 2;
      } else {
        resp.push(`${sIndex}s1`);
        numero = 0;
        sIndex++;
      }
    }
    if (letter === "p") {
      if(pIndex > mayorCoeficiente) mayorCoeficiente = pIndex;
      if (numero >= 6) {
        resp.push(`${pIndex}p6`);
        numero -= 6;
        pIndex++;
      } else {
        resp.push(`${pIndex}p${numero}`);
        numero = 0;
        pIndex++;
      }
    }
    if (letter === "d") {
      if(dIndex > mayorCoeficiente) mayorCoeficiente = dIndex;
      if (numero >= 10) {
        resp.push(`${dIndex}d10`);
        numero -= 10;
        dIndex++;
      } else {
        resp.push(`${dIndex}d${numero}`);
        numero = 0;
        dIndex++;
      }
    }
    if (letter === "f") {
      if(fIndex > mayorCoeficiente) mayorCoeficiente = fIndex;
      if (numero >= 14) {
        resp.push(`${fIndex}f14`);
        numero -= 14;
        fIndex++;
      } else {
        resp.push(`${fIndex}f${numero}`);
        numero = 0;
        fIndex++;
      }
    }
    serruchoIndex++;
  }
  return {
    s: sIndex,
    p: pIndex,
    d: dIndex,
    f: fIndex,
    mayorCoeficiente,
    array: resp,
  };
}
