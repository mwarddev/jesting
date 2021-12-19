/**
 * @jest-environment jsdom
 */

const {
    TestWatcher
} = require("jest");
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20,22)).toBe(42);
        });
        test("should return 50 for 25 + 25", () => {
            expect(addition(25,25)).toBe(50);
        });
    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
});