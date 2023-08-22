export function extractNumber(value) {
  return parseFloat(value.replace(/[^\d.-]/g, ""));
}
