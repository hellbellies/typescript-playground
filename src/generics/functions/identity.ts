// instead of doing the following
function number_identity(item: number) {
  return item
}
function string_identity(item: string) {
  return item
}
function boolean_identity(item: boolean) {
  return item
} 

// we can use generics

// accepts any type of argument and returns the same type of argument
// T is a type parameter, it could be any type, and you can use any letter as a type parameter
// It basically creates a connection between the input type and the output type
function identity<T>(item: T): T {
  return item
}

// this function can be called with any type of argument and we have the return type as the same type of argument
const id_1 = identity<number>(1) // id_1 is of type number
const id_2 = identity<string>('hello') // id_2 is of type string
const id_3 = identity<boolean>(true) // id_3 is of type boolean
type Foo = { foo: string }
const id_4 = identity<Foo>({ foo: 'bar' }) // id_4 is of type Foo

// using typeof you can get the type of the variable
function identityEx<T>(item: T) {
  return `${typeof item}: ${item}`
}
console.log(identityEx(1))
console.log(identityEx('hello'))
console.log(identityEx(true))
// NOTE: the following example will NOT output Foo, but object as the type
console.log(identityEx<Foo>({ foo: 'bar' }))
