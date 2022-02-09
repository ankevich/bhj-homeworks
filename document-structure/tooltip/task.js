let blocksForTooltips = Array.from(document.getElementsByClassName("has-tooltip"));

document.querySelector("header").insertAdjacentHTML(
  "afterEnd",
  `<div id="tooltip" class="tooltip""></div>`
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

blocksForTooltips.forEach(a => {
  a.onclick = () => {
    let position = a.getBoundingClientRect()
    showTooltip(a.title, position)
    return false
  }
})