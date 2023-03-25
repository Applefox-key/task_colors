import { defaultColors } from "../constants/default_colors";
import { ColorHex, Filter } from "../model";
import { hex2rgb } from "./hexToRgb";

//ordering colors
//- Higher Red value first; if the same then:
// - Higher Green value first; if the same then:
// - Higher Blue value first; if the same then on the same position
export const colorsSort = (colors: ColorHex[]): ColorHex[] => {
  colors.sort((a: ColorHex, b: ColorHex) => {
    if (a.rgb.r === b.rgb.r) {
      if (a.rgb.g === b.rgb.g) return b.rgb.b - a.rgb.b;
      return b.rgb.g - a.rgb.g;
    }
    return b.rgb.r - a.rgb.r;
  });
  return colors;
};

//filtring colors list  by user conditions
export const colorsFilter = (
  colors: ColorHex[],
  filters: Filter[]
): ColorHex[] => {
  return colors.filter((color) => {
    let isFits = true;
    filters.forEach((filt) => {
      if (filt.isChecked && color.rgb[filt.id] < 127) {
        isFits = false;
        return;
      }
    });
    return isFits;
  });
};
//return ordered and sorted colors list including default anf users colors
export const colorsFilterSort = (
  colors: ColorHex[],
  filters: Filter[]
): ColorHex[] => {
  //join default colors and user colors into one list
  let defaultColorsList: ColorHex[] = defaultColors.map((el, i) => {
    return { id: i, name: el, isDefault: true, rgb: hex2rgb(el) };
  });
  // ordering and sortering colors
  return colorsFilter(colorsSort(colors.concat(defaultColorsList)), filters);
};
