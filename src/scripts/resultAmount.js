import { amount, amountResult } from "./captureElements.js";
import { createElement } from "./createElement.js";

const ulAmount = createElement("ul");

export function resultAmount() {
  const amountValue = Number(amount.value);

  const liAmount = createElement("li");

  liAmount.innerHTML = amountValue;
  ulAmount.appendChild(liAmount);
  amountResult.appendChild(ulAmount);
}
