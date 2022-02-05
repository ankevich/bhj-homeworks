let blocksForTooltips = Array.from(document.getElementsByClassName("has-tooltip"));

let hideAllTooltips = () => {
  let tooltips = Array.from(document.getElementsByClassName("tooltip"));
  tooltips.map((tooltip) => {
    tooltip.classList.remove("tooltip_active");
  });
};

blocksForTooltips.map((block) => {
  block.onclick = () => {
    
    hideAllTooltips();
    let position = block.getBoundingClientRect();
    block.insertAdjacentHTML(
      "afterEnd",
      `<div class="tooltip tooltip_active" style="left: ${position.left}px; top: ${position.top +20}px;">
            ${block.title}
       </div>`
    );
    return false;
  };
});

document.addEventListener("scroll", hideAllTooltips)
