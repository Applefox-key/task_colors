// input color validation
export const isValidColorHex = (colorHex: string): boolean => {
    const patternHex = /^#[0-9a-fA-F]{0,6}$/;
    return patternHex.test(colorHex) || colorHex === "";
  };
  //auto adding # symbol
  export const addHash = (colorName:string):string => {
    if (!colorName) return colorName;
    return colorName[0] === "#"? colorName : "#" + colorName.slice(0, 7);
  }