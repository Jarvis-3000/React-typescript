import { add, getShoppingList } from "../utilities/add";

describe("Calculator tests", () => {
  test("should return sum correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("should return sum of negative numbers", () => {
    expect(add(-5, 3)).toBe(-2);
  });
});

describe("is item present in shopping list", () => {
  test("should return yes", () => {
    expect(getShoppingList()).toContain("milk");
  });
});
