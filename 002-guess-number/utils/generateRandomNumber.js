export const generateRandomNumber = (min = -Infinity, max = Infinity) =>
    Math.floor(Math.random() * (max - min)) + min;
