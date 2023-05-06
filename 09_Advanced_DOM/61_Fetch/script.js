const URL = "https://jsonplaceholder.typicode.com/users/1"
const button = document.querySelector("button")

// Async (Promise)
// window
//   .fetch(URL)
//   .then((response) => {
//     return response.json()
//   })
//   .then((response) => {
//     console.log(response)
//   })

// Async Await
async function doStuff() {
  const response = await fetch(URL)
  if (response.ok) {
    const user = await response.json()
    console.log(user)
  } else {
    console.log("FAILURE")
  }
}

button.addEventListener("click", doStuff)
