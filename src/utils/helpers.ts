/**
 * Change value into K notation string 8408 to 8.4K ; 6735 to 6.7K ; 3090 to 3K
 * @param value : number - value to be changed to K notation.
 * @returns : string - result changing number into K notation.
 */
export const getKNotation = (value: number): string => {
  if ((value / 100) % 10 == 0) {
    return Math.floor(value / 1000) + "k";
  }
  return Math.floor(value / 100) / 10.0 + "k";
};

/**
 * Change timestamp date into month and day notation.
 * @param timestampt: number - date timestampt
 * @returns : string - result of change in format ShortMonth Day.
 */
export const getDayMonth = (timestampt: number): string => {
  return new Date(timestampt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });
};
