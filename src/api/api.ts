import { ColorHex } from "../model";

//API for work with local storage
export const API_LS = {
  //set to the local storage user's list of colors
  toLS(value: ColorHex[]): void {
    localStorage.setItem("colors", JSON.stringify(value));
  },
  //get  user's list of colors from the local storage
  fromLS(): ColorHex[] {
    const colors: string | null = localStorage.getItem("colors");
    if (colors === null) {
      return [];
    }
    return JSON.parse(colors);
  },
};
