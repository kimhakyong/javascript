import IPerson from './person/IPerson'
import Person, {makePerson} from './person/Person'
import Chance from 'chance'
import * as R from 'ramda'
import {log} from "util";

// ch02-2
const testMakePerson = (): void => {
    let jane: IPerson = makePerson('Jane')
    let jack: IPerson = new Person('Jack')
    console.log(jane, jack)
}

testMakePerson()

const chance = new Chance()
let persons: IPerson[] = R.range(0, 2).map((n: number) => new Person(chance.name(), chance.age()))
console.log(persons)

const calc = (value: number, cb: (value: number) => void): void => {
    let add = (a: number, b: number) => a + b
    function multiply(a: number, b: number): number { return a * b }

    let result = multiply(add(1, 2), value)
    cb(result)
}

calc(30, (result: number) => console.log(`result is ${result}`))

const addSample = (a: number, b: number): number => a + b

const add1 = (a: number): (a: number) => number => (b: number): number => a + b

type NumberToNumberFunc = (a: number) => number
const add = (a: number): NumberToNumberFunc => {
    const _add: NumberToNumberFunc = (b: number): number => {
        return a + b
    }
    return _add
}

let fn: NumberToNumberFunc = add(1)
let result = fn(2)

console.log(result)
console.log(add(1)(2))

const multiply = (a: number) => (b: number) => (c: number) => a * b * c
console.log(multiply(1)(2)(3))

type Person1 = {name: string, age: number}

const makePerson1 = (name: string, age: number = 10): Person1 => {
    const person = {name, age}
    return person
}
console.log(makePerson1('Jack'))
console.log(makePerson1('Jack', 33))

function printPerson({name, age}: Person1): void {
    console.log(`${name} ${age}`)
}

printPerson({name: '홍길동', age: 23})

const makeObject = (key: any, value: any) => ({[key]: value})
console.log(makeObject('name', 'Jack'))
console.log(makeObject('firstName', 'Jane'))

class A {
    value: number = 1
    method: () => void = function(this: A): void {
        console.log(`value: ${this.value}`)
    }
}

class B {
    constructor(public value: number = 1) {
    }

    method(): void {
        console.log(`value: ${this.value}`)
    }
}

let a: A = new A()
let b: B = new B(2)
a.method()
b.method()

