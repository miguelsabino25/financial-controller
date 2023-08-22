import { typeResult, income } from "./captureElements.js";
import { createElement } from "./createElement.js";

const ulType = createElement("ul");

export function resultType() {
  const incomeCheck = income.checked;

  const liType = createElement("li");

  const incomeImg = createElement("img");
  const expenseImg = createElement("img");
  const deleteImg = createElement("img");

  deleteImg.classList.add("buttonDelete");

  incomeImg.src = "./images/icons8-enviar-mensagem-16-green.png";
  expenseImg.src = "./images/icons8-abaixo-dentro-de-um-círculo-16-red.png";
  deleteImg.src = "./images/icons8-lixeira-16.png";

  if (incomeCheck) {
    liType.appendChild(incomeImg);
    liType.appendChild(deleteImg);
    ulType.appendChild(liType);
    typeResult.appendChild(ulType);
  } else {
    liType.appendChild(expenseImg);
    liType.appendChild(deleteImg);
    ulType.appendChild(liType);
    typeResult.appendChild(ulType);
  }
}
