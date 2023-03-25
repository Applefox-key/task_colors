import { ColorRGB } from "../model";

//saturation calcutation
const colorSaturation = (r: number, g: number, b: number): number => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  //lightness calcutation
  const lightness = (max + min) / 2;
  //saturation calcutation
  if (max === min) {
    return 0;
  } else if (lightness < 128) {
    return Math.ceil((max - min) / (max + min)) * 255;
  } else {
    return Math.ceil((max - min) / (510 - max - min)) * 255;
  }
};

//HEX to RGB convertion and saturation calcutation
export const hex2rgb = (c: string): ColorRGB => {
  let rgb: number[] = [
    parseInt(c.slice(1, 3), 16),
    parseInt(c.slice(3, 5), 16),
    parseInt(c.slice(5, 7), 16),
  ];
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    s: colorSaturation(rgb[0], rgb[1], rgb[2]),
  };
};
