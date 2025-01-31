import { add } from "./stringCalculatorLogic";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import StringCalculatorComponent from "../components/StringCalculatorComponent";
//import "@testing-library/jest-dom/extend-expect";
describe("String Calculator", () => {
    test("renders the component correctly", () => {
      render(<StringCalculatorComponent />);
      expect(
        screen.getByRole("heading", {
          name: /string calculator/i,
        })
      ).toBeTruthy();
      expect(screen.getByRole("textbox")).toBeTruthy();    
      expect(screen.getByText(/rules for valid input/i)).toBeTruthy();
      expect(
        screen.getByRole("button", {
          name: /calculate/i,
        })
      ).toBeTruthy();
      expect(
        screen.getByText(/numbers must be separated by or \./i)
      ).toBeTruthy();
      expect(
        screen.getByText(/custom delimiters must start with/i)
      ).toBeTruthy();
      expect(
        screen.getByText(/examples for valid\/invalid inputs:/i)
      ).toBeTruthy();
    });

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
    test("handles newlines as delimiters", () => {
        expect(add("1\n2,3")).toBe(6);
    });
    test("handles a custom single-character delimiter", () => {
        expect(add("//;\n1;2;3")).toBe(6);
    });

    test("handles a custom multi-character delimiter", () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });

    test("handles multiple custom single-character delimiters", () => {
        expect(add("//[*][%]\n1*2%3")).toBe(6);
    });

    test("handles multiple custom multi-character delimiters", () => {
        expect(add("//[4][%%]\n142%%3")).toBe(6);
    });

    test("ignores numbers greater than 1000", () => {
        expect(add("2,1001")).toBe(2);
        expect(add("2,1000")).toBe(1002);
    });

    test("handles a custom single-character delimiter", () => {
        expect(add("//;\n1;2;3")).toBe(6);
    });
    test("throws an error for negative numbers", () => {
        expect(() => add("-1,2,-3")).toThrow("Please Enter only positive numbers -1, -3");
    });
     test("throws an error for invalid input", () => {
       expect(() => add("1,2,,,,,,,")).toThrow(
         "Invalid input. Please follow the below rules for a valid input"
       );
     });
      test("throws an error for invalid input", () => {
        expect(() => add("1,2,a,b")).toThrow(
          "Invalid input. Please follow the below rules for a valid input a, b"
        );
      });
    
})
