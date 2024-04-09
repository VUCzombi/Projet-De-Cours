// Выберите элемент с помощью предоставленного JS-кода
var mobileHeaderElement = document.querySelector("#mobileheader");

// Создайте новый элемент с таким же outerHTML
var clonedElement = document.createElement("div");
clonedElement.outerHTML = mobileHeaderElement.outerHTML;

// Примените стили к клонированному элементу
clonedElement.style.webkitTextSizeAdjust = "100%";
clonedElement.style.webkitTapHighlightColor = "transparent";
clonedElement.style.font = "15px/24px Roboto, Arial, sans-serif";
clonedElement.style.color = "#555";
clonedElement.style.boxSizing = "border-box";
clonedElement.style.outline = "none !important";
clonedElement.style.display = "block!important";
clonedElement.style.margin = "0";
clonedElement.style.padding = "0";
clonedElement.style.position = "relative";
clonedElement.style.height = "63px";
clonedElement.style.zIndex = "2997";

// Добавьте клонированный элемент куда-то на страницу
document.body.appendChild(clonedElement);