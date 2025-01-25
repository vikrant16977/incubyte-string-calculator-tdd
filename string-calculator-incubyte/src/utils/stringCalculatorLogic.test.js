import { add } from "./stringCalculatorLogic";

describe("String Calculator", () => {
    test("returns 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });

    test("returns the number for a single input", () => {
        expect(add("1")).toBe(1);
    });

    test("returns the sum for two numbers", () => {
        expect(add("1,2")).toBe(3);
    });

    test("handles multiple numbers", () => {
        expect(add("1,2,3,4,5")).toBe(15);
    });
})
