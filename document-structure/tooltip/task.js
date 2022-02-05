let blocksForTooltips = Array.from(document.getElementsByClassName("has-tooltip"));

document.querySelector("header").insertAdjacentHTML(
  "afterEnd",
  `<div id="tooltip" class="tooltip" style="left: ${10}px; top: ${10 +20}px;">
        ${""}
   </div>`
)

let tooltip = document.querySelector("#tooltip")

let showTooltip = (text, position) => {
  if (text == tooltip.textContent) {
    tooltip.classList.toggle("tooltip_active")
  } else {
    tooltip.textContent = text
    tooltip.style = `left: ${position.left}px; top: ${position.top +20}px;`
    tooltip.classList.add("tooltip_active")
  }
}

blocksForTooltips.map(a => {
  a.onclick = () => {
    let position = a.getBoundingClientRect()
    showTooltip(a.title, position)
    return false
  }
})