// This function will take an array and sort it with a random parameter
export const sortResponse = (array: any[]) =>
[...array].sort(() => Math.random() - 0.5);