import { description, descriptionResult } from "./captureElements.js";
import { createElement } from "./createElement.js";

export function resultDescription() {
  const descriptionValue = description.value;
  const liDescription = createElement("li");
  const ulDescription = createElement("ul");

  liDescription.innerHTML = descriptionValue;
  ulDescription.appendChild(liDescription);
  descriptionResult.appendChild(ulDescription);
}
