function h(node, attrs, ...children) {
  return { node, attrs, children };
}

function render(h) {
  // Strings just convert to #text Nodes:
  if (typeof h === 'string' || typeof h === 'number') return document.createTextNode(h);

  // Create DOM Element
  let element = document.createElement(h.node)

  // Add Attributes
  let attrs = h.attrs || {}
  Object.keys(attrs).forEach(key => element.setAttribute(key, attrs[key]))

  // Render Children
  h.children.forEach(child => element.appendChild(render(child)))

  // Return rendered element
  return element
}

function createApp(h, container) {
  container.appendChild(render(h))
}

const element = h("h1", null, "Hello World")
createApp(element, document.getElementById("app"))
