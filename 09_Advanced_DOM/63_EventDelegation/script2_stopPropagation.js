const buttons = document.querySelectorAll("button")

// Section 01
document.addEventListener("click", () => {
  console.log("document click")
})

// Section 02
document.body.addEventListener("click", (e) => {
  e.stopPropagation() // this action (stopPropagation) will stop event delegation, so section 01 won't be running
  console.log("body click")
})

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("button click")
  })
})
