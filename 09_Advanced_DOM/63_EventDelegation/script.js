const buttons = document.querySelectorAll("button")

/**
 * Event Delegation
 * This would buble console.log from the closest to the fartest (button, body, document)
 * The first one, Code will capture from the fartest to the closest, and then bubling it from the closest to the fartest (Event Delegation)
 */

document.addEventListener("click", () => {
  console.log("document click")
})

document.body.addEventListener("click", () => {
  console.log("body click")
})

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("button click")
  })
})

// ==========================================================================
