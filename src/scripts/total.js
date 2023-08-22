import { entries, exit, total, amount } from "./captureElements.js";
import { valueAmount, valueAmount2 } from "./inputOrOutput.js";
import { extractNumber } from "./extractNumber.js";

export function totalAmount() {
  const entriesValue = extractNumber(entries.innerHTML);
  const exitValue = extractNumber(exit.innerHTML);

  const sum = entriesValue - exitValue;

  total.innerHTML = `R$ ${sum.toFixed(2)}`;
  entries.innerHTML = `R$ ${valueAmount.toFixed(2)}`;
  exit.innerHTML = `R$ ${valueAmount2.toFixed(2)}`;
}
