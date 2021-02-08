type exprType = (a: number, b: number) => number;

export const sum: exprType = (a, b) => (a === 1 ? a : a + b);
export const minus: exprType = (a, b) => a - b;
