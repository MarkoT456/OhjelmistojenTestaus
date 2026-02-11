import {add, divide, multiply, subtract} from "../mylib.js"
import { expect } from "chai"

describe("Add test 1", () => {
    it("Should add two numbers together correctly", () => {
        expect(add(1, 5)).to.equal(6)
    })
})

describe("Add test 2", () => {
    it("Should add two numbers together correctly", () => {
        expect(add(10, 6)).to.equal(16)
    })
})

describe("Subtract test", () =>{
    it("Should subtract two numbers", () => {
        expect(subtract(10, 25)).to.equal(-15);
    })
})

describe("Multiply test", () => {
    it("Should multiply numbers correctly", () => {
        expect(multiply(3, 5)).to.equal(15);
    })
})

describe("Division test", () => {
    it("Should divide two numbers correctly", () => {
        expect(divide(9, 2)).to.equal(4.5);
    })
})

describe("Zero division test", () => {
    it("Should throw an error", () =>  {
        expect(() => divide(5, 0)).to.throw("Cannot divide by zero!");
    })
})

before(() => {
    console.log("Starting testing....")
})

after(() =>{
    console.log("Testing done.")
})