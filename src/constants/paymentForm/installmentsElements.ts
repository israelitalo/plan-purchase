export const installmentsElements = (arrayElementsNumber: number) =>
  new Array(arrayElementsNumber).fill(1).map((_, index) => ({
    value: String(index + 1),
    label: String(index + 1),
  }));
