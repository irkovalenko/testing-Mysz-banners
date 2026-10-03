export function createToolGrid(tool) {
  const imagePath = `../resources/images/tools/${tool.image}`;
  return `
    <div class="tool" title="${tool.name}">
      <div class="tool-button">
        <img src="${imagePath}" alt="${tool.name}" />
      </div>
      <span class="tool-tip">${tool.name}</span>
    </div>
  `;
}
