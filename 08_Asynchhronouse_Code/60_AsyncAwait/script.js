// ASYNC AWAIT TOPIC

const setTimeOutPromise = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`You waited ${timer} miliseconds`)
      // reject("Error ini")
    }, timer)
  })
}

// PROMISE
// setTimeOutPromise(250)
//   .then((message) => {
//     console.log(message)
//     console.log(1)
//     return setTimeOutPromise(2000)
//   })
//   .then((message) => {
//     console.log(message)
//     console.log(2)
//   })

// ASYNC AWAIT
async function doStuff() {
  try {
    const message = await setTimeOutPromise(250)
    console.log(message)
    console.log("1")
    const message2 = await setTimeOutPromise(2000)
    console.log(message2)
    console.log("2")
  } catch (error) {
    console.log("Error message: ", error)
  }
}

doStuff()

//=====================================================================================

const getValueWithDelay = (value, timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, timer)
  })
}

const getValueWithDelayError = (value, timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Ini Error Reject")
    }, timer)
  })
}

async function test() {
  try {
    const value1 = await getValueWithDelay("Oscar", 250)
    console.log(value1)
    const value2 = await getValueWithDelay("Hermawan", 250)
    console.log(value2)
    const value3 = await getValueWithDelayError("Data", 250)
    console.log(value3)
  } catch (error) {
    console.error(error)
  } finally {
    console.log("finally")
  }
}

test()
