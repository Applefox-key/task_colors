import { ColorHex } from "../model";

//changing the input outline Color to the one entered by the user
export const styleBtn = (value: string): void => {
  const btnInput = document.getElementById("input-color");
  if (btnInput) btnInput.style.outlineColor = value;
};

//setting the color for the colored rectangle above the name
export const styleColor = (color: ColorHex): void => {
  const colorBox = document.getElementById(color.id.toString());
  if (colorBox) colorBox.style.backgroundColor = color.name;
};
