import React from "react";
import "./App.css";
import { NumberLiteralType } from "typescript";

// components
import InputField from "./components/InputField";

function App() {
  return (
    <div className="App">
      <span className="heading">To Do List</span>
      <InputField />
    </div>
  );
}

export default App;

// Notes

let name: string = "Joni"; // String
let anyVar: any; // Any
let age: number; // Integer (number)
let isStudent: boolean; // Boolean
let hobbies: string[]; // Array of string
let numbers: number[]; // Array of integer
let role: [number, string];

role = [5, "Man"];

// Object
type Person = {
  name: string;
  age?: number; // ? for optional
};

let person: Person = {
  name: "Nameless",
};

// Array of Object
let lotsOfPeople: Person[];

// Union
let unionVar: number | string;
unionVar = 5;

// Function
function printName(name: string) {
  console.log(name);
}
printName("Nameless");

let printAge: (age: number) => never;

// Type vs interface
// Type
type x = {
  a: string;
  b: number;
};

type y = x & {
  // y contains x
  c: number;
};

// Interface
interface Human {
  name: string;
  age?: number;
}

interface Male extends Human {
  // Male contains Human
  profession: string;
}

type MaleStudent = Male & {
  GPA: number;
};
