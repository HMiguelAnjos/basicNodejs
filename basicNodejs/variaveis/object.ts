interface Person {
  name: string;
  age: number;
}

let person: Person = { name: 'Carlos', age: 25 };


console.log(person)
console.log(`The type of person variable is ${typeof(person)}`)