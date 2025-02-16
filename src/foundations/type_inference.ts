namespace TypeInference {
  // typescript can infer the type
  const message = 'hello'; // greeting is of type string
  const age = 42; // age is of type number
  const numbers = [1, 2, 3, 4, 5]; // numbers is of type number[]

  // type inference works with functions too
  function add(a: number, b: number) {
      return a + b;
  }

  // but it also has some gotchas
  // what gotchas?
  // type inference can be tricky with complex types
  // let's see an example
  const person = {
      name: 'John',
      age: 42
  };

  // when should you use type inference?
  // definitely when using loops
  for (let i = 0; i < 10; i++) {
      console.log(i)
  }
  [1, 2, 3].forEach((num) => {
      console.log(num);
  });
  [1, 2, 3].map((num) => {    
    return num * 2;
  });
  // and when you're using functions that return a value
  // like the following 
  function greet() {
      return 'hello';
  }
  const greeting = greet();
}




