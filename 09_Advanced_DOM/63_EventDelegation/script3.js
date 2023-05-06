const buttons = document.querySelectorAll("button")

// Section 03
document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    console.log("Click Button")
  }
})

// Section 01
// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     console.log("button click")
//   })
// })

/**
 * this element wouldn't work, because this element create after querySelectorAll
 * we need to command section 01, and open section 03
 */
const newButton = document.createElement("button")
newButton.innerText = "Button 5"
document.body.append(newButton)
