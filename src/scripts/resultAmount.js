import { amount, amountResult } from "./captureElements.js";
import { createElement } from "./createElement.js";

export function resultAmount() {
  const amountValue = amount.value;

  const liAmount = createElement("li");
  const ulAmount = createElement("ul");

  liAmount.innerHTML = amountValue;
  ulAmount.appendChild(liAmount);
  amountResult.appendChild(ulAmount);
}
