// Promise but seems like synchronus.
const promise = new Promise((resolve, reject) => {
  const sum = 1 + 2
  if (sum === 2) {
    resolve("Success")
  } else {
    reject("Error")
  }
})

promise
  .then((response) => {
    console.log("response", response)
  })
  .catch((error) => {
    console.error("error", error)
  })

// ==========================================================

setTimeout(() => {
  console.log("oke 250")
}, 250)

const setTimeOutPromise = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timer)
  })
}

// call a callback (setTimeout) with promise
setTimeOutPromise(2000).then(() => {
  console.log("oke 2000")
})

// =================================================================

// callback hell
setTimeout(() => {
  console.log("1")
  setTimeout(() => {
    console.log("2")
    setTimeout(() => {
      console.log("3")
    }, 250)
  }, 250)
}, 250)

// callback hell
setTimeOutPromise(250).then(() => {
  console.log("cb hell 1")
  setTimeOutPromise(250).then(() => {
    console.log("cb hell 2")
    setTimeOutPromise(250).then(() => {
      console.log("cb hell 3")
    })
  })
})

// readable
setTimeOutPromise(2000)
  .then(() => {
    console.log("cb hell 11")
    return setTimeOutPromise(2000)
  })
  .then(() => {
    // this .then is based on previous promise that we returned
    console.log("cb hell 22")
    return setTimeOutPromise(2000)
  })
  .then(() => {
    console.log("cb hell 33")
  })

const button = document.querySelector("button")

function addEventListener(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, resolve)
  })
}

addEventListener(button, "click").then((e) => {
  console.log("clicked")
  console.log(e)
})

// ===================================================================================
