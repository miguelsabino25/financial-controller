import { resultDescription } from "./resultDescription.js";
import { resultAmount } from "./resultAmount.js";
import { resultType } from "./resultType.js";
import { amount, description, entries, expense } from "./captureElements.js";

export function printResult(event) {
  event.preventDefault();
  if (description.value !== "" && amount.value !== "") {
    resultDescription();
    resultAmount();
    resultType();
  } else {
    alert("Os campos devem conter algum valor");
  }
}
