import { description, descriptionResult } from "./captureElements.js";
import { createElement } from "./createElement.js";

const ulDescription = createElement("ul");

export function resultDescription() {
  const descriptionValue = description.value;
  const liDescription = createElement("li");

  liDescription.innerHTML = descriptionValue;
  ulDescription.appendChild(liDescription);
  descriptionResult.appendChild(ulDescription);
}
