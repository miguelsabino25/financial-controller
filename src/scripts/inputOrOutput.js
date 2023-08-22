import { entries, exit } from "./captureElements.js";
import { amount, income, expense } from "./captureElements.js";
export { valueAmount, valueAmount2 };

let valueAmount = 0;
let valueAmount2 = 0;

export function inputOrOutput() {
  const amountNumber = Number(amount.value);

  if (income.checked) {
    valueAmount += amountNumber;
    entries.innerHTML = `${valueAmount.toFixed(2)}`;
  } else if (expense.checked) {
    valueAmount2 += amountNumber;
    exit.innerHTML = `${valueAmount2.toFixed(2)}`;
  }
}
