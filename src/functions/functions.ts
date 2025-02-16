// we type the function parameters, we can also type the return value, but typescript is very good at infering it
export function addNumbers(a: number, b: number) {
    return a + b;
}
// this is how type the return value
export function addNumbers2(a: number, b: number): number {
    return a + b;
}

// default parameters
export function greet(name: string, greeting:string = 'Hello'): string {
  return `${greeting}, ${name}`
}

// union types as parameters
export function getId(id: number | string): string {  
  return id.toString()
}

// returning void
export function printId(id: number | string) {
  console.log(getId(id))
}
// you can also type the return value............↓↓↓↓
// export function printId(id: number | string): void {
//   console.log(getId(id))
// }

// returning promises
export function getPromise(): Promise<string> {
  return Promise.resolve('done')
}

// Rest parameters ... allows you to pass a variable number of arguments and it will be coalesced into an array
export function sum(...numbers: number[]): number {
  return numbers.reduce((result, num) => result + num, 0)
}