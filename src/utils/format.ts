export const formatNumber = (
  value: number,
  digits: number = 3
): string => {
  return value.toString().padStart(digits, "0");
};

export const range = (
  start: number,
  end: number
): number[] => {
  return Array.from(
    { length: end - start + 1 },
    (_, i) => start + i
  );
};

export const chunk = <T>(
  array: T[],
  size: number
): T[][] => {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
};