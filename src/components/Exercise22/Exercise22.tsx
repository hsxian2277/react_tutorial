import React from 'react';

// Playing around with typescript fundamentals

let sales: number = 123;
let course: string = 'typescript';
console.log(sales, course);

let numbers: number[] = [1, 2, 3];
console.log(numbers);

let info: [string, number] = ['person', 5];
console.log(info);

enum Color {Red = 'red', Blue = 'blue', Green = 'green'};

console.log(Color.Red);

interface Person {
  name: string;
  age: number;
};

interface Guy extends Person {
  profession: string;
}

const p: Guy = {
  name: 'a',
  age: 5,
  profession: 'b',
};

const printPerson = (p: Guy) => {
  console.log(p.name, p.age);
}

printPerson(p);

type X = {
  a: number,
  b: number,
};

type Y = X & {
  c: string,
  d: string,
};

const y: Y = {
  c: 'c',
  d: 'd',
  a: 1,
  b: 2,
};

console.log(y);

let n: number|string = '1';
n = 1;
console.log(n);

export default function Exercise22() {
  return (
    <div>
      Exercise 22 typescript basics
    </div>
  );
};