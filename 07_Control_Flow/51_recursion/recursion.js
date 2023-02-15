const person = {
  name: "Kyle",
  friend: {
    name: "Joe",
    friend: {
      name: "Sally",
    },
  },
}

function recursionNames(person) {
  if (person === undefined) return
  console.log(person.name)
  recursionNames(person.friend)
}

recursionNames(person)
