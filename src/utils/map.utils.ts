export const areObjectsEqual = (obj1: Record<string, any>, obj2: Record<string, any>) => {
  let areEqual = true

  Object.keys(obj1).map((property) => {
    const item1 = obj1[property]
    const item2 = obj2[property]

    if (isAnObject(item1) && isAnObject(item2)) {
      if (!areObjectsEqual(item1, item2)) {
        areEqual = false
      }
    }

    if (item1 !== item2) {
      areEqual = false
    }
  })

  return areEqual
}

const isAnObject = (item: unknown) => {
  return typeof item === 'object'
}