import { resultDescription } from "./resultDescription.js";
import { resultAmount } from "./resultAmount.js";
import { resultType } from "./resultType.js";
import {
  amount,
  description,
  entries,
  expense,
  income,
} from "./captureElements.js";
import { inputOrOutput } from "./inputOrOutput.js";
import { totalAmount } from "./total.js";

export function printResult(event) {
  event.preventDefault();

  if (description.value !== "" && amount.value !== "") {
    resultDescription();
    resultAmount();
    resultType();
    inputOrOutput();
    totalAmount();
  } else {
    alert("Os campos devem conter algum valor");
  }
}
