// select all elements
const form = document.querySelector("#new-item-form")
const list = document.querySelector("#list")
const input = document.querySelector("#item-input")

// submit data
form.addEventListener("submit", (e) => {
  e.preventDefault()

  // console.log(input.value)
  // 1. Create new list
  const item = document.createElement("div")
  item.innerText = input.value
  item.classList.add("list-item")

  // 2. Add item to the div list
  list.appendChild(item)

  // 3. Clear input
  input.value = ""

  // 4. Setup event listener to delete
  item.addEventListener("click", () => {
    list.removeChild(item)
  })

  // alternative
  // item.addEventListener("click", () => {
  //   item.remove()
  // })
})

// like "OnChange" on React
// input.addEventListener("input", (e) => {
//   console.log(e.target.value)
// })
