import { useState } from 'react'
import './App.css'
import InputField from './components/InputField';

//Type in Typescript
let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]; 

// Union
let hybrid: number | string;

// Any type
let anything: any;
let whoKnows: unknown;

// type defines an object 
// Age property is optional
type Person = {
  name: string;
  age?: number;
};

// Instantiate an object
let person: Person = {
  name: "Gavin",
  age: 24
};

type X = {
  a: string;
  b: number;
};
type Y = X & {
  c: string;
  d: number;
};
let y: Y = {
  c: 'test',
  d: 42,
  a: 'test2',
  b: 3
};

// Define a function
// can also return never if there is no return
let printString: (word: string) => void;

function printName(name: string) {
  console.log(name);
}
printName("Gavin")
printName("Another print")

// Define Interface works the same as type
interface OtherPerson {
  name: string;
  age?: number;
};

// Extend an interface 
interface Guy extends Person {
  profession: string;
}

// Instantiate an interface 
let someGuy: Guy = {
  name: 'dude',
  profession: 'none'
};

const App: React.FC = () => {
  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField />
    </div>
  );
};

export default App
