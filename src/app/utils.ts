import { Task } from './interfaces';

export const reverseAlphabet = (a: Task, b: Task): number => {
  const labelA = a.label.toLowerCase();
  const labelB = b.label.toLowerCase();
  if (labelA < labelB) {
    return 1;
  }
  if (labelA > labelB) {
    return -1;
  }
  return 0;
};

export const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
