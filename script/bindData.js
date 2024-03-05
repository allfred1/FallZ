const bindingAttributes = ["data-bind-text", "data-bind-value"];
function bindData(rootElement, data) {
  const elements = rootElement.querySelectorAll(
    `[${bindingAttributes.join("], [")}]`
  );

  elements.forEach((element) => {
    bindingAttributes.forEach((attr) => {
      if (element.hasAttribute(attr)) {
        const property = element.getAttribute(attr);
        const value = data[property];
        if (attr === "data-bind-text") {
          element.textContent = value;
        } else if (attr === "data-bind-value") {
          element.value = value;
        }
      }
    });
  });
}
