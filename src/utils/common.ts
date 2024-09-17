/**
 * Checks if a value is not undefined or null.
 * @param {T} value - Takes a value of any type `T` as a parameter.
 * @returns A boolean value based on whether the input `value` is not `undefined` and not `null`.
 */
export function isValid<T>(value: T) {
  return value !== undefined && value !== null;
}

export const isEmptyArray = <T>(arr: T[]) => arr.length === 0;
