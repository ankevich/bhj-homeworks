let blocksForTooltips = Array.from(
  document.getElementsByClassName("has-tooltip")
);

blocksForTooltips.map((block) => {
  block.onclick = () => {
    let position = block.getBoundingClientRect();
    block.insertAdjacentHTML(
      "afterEnd",
      `<div class="tooltip tooltip_active" style="left: ${position.left}px; top: ${position.top}px;">
            ${block.title}
       </div>`
    );
    return false;
  };
});
