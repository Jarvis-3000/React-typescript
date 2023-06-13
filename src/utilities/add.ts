export const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

export const concate = (string1: string, string2: string): string => {
  return string1 + string2;
};

export const getShoppingList = (): string[] => {
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  return shoppingList;
};
