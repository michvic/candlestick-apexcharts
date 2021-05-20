import IMask from "imask";

export function formatarMoedaIMask(texto, valorDefault = "R$0,00") {
  if (texto) {
    const maskedValue = IMask.createMask({
      mask: "R$num",
      blocks: {
        num: {
          mask: Number,
          thousandsSeparator: ".",
          radix: ",",
          scale: 2,
          padFractionalZeros: true,
          signed: true
        }
      }
    }).resolve(String(texto));
    return maskedValue;
  }

  return valorDefault;
}
