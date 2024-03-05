const templateSyntax = /{{([\s\S]+?)}}/g;

function renderTemplate(template, data) {
  return template.replace(templateSyntax, (match, variable) => {
    const value = data[variable.trim()];
    return value !== undefined ? value : "";
  });
}
