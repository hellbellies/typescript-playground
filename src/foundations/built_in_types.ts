namespace BuiltInTypes {
  const name: string = 'John Doe';
  const age: number = 42;
  const isStudent: boolean = false;
  const fooRe: RegExp = /foo/;

  // arrays
  const numbers: number[] = [1, 2, 3, 4, 5];
  const colors: string[] = ['red', 'green', 'blue'];
  // arrays with generic Array type
  const numbers2: Array<number> = [1, 2, 3, 4, 5];
  const colors2: Array<string> = ['red', 'green', 'blue'];

  // sets
  const numberSet: Set<number> = new Set([1, 2, 3, 4, 5]);

  // tuples
  const tuple: [number, string] = [1, 'hello'];

  // object
  const person: { name: string, age: number } = { name: 'John', age: 42 };

  // objects as maps
  const ages: { [name: string]: number } = {
    John: 42,
    Jane: 35,
  };
  // better with Record generic
  const ages2: Record<string, number> = {
    John: 42,
    Jane: 35,
  }
}

