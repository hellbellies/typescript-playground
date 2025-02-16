function getRandomElement<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

const r1 = getRandomElement<number>([1, 2, 3])
console.log(r1)
const r2 = getRandomElement<string>(['red', 'green', 'blue'])
console.log(r2)

// what do we gain? the following would not compile
// const r3 = getRandomElement<string>([1, 'hello', true])