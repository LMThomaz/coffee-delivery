export function convertCentsToBRL(value: number) {
  const valueFormatted = String((value / 100).toFixed(2)).replaceAll('.', ',')
  return ['R$', valueFormatted]
}
