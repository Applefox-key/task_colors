import React from "react";
import { ColorHex } from "../model";
import OneColorClass from "./OneColor";

import "./styles.scss";

interface Props {
  colors: ColorHex[];
  handleDelete: (color: ColorHex) => void;
}

const ColorsList: React.FC<Props> = ({ colors, handleDelete }) => {
  return (
    <form className="color_list">
      {colors.map((item) => (
        <OneColorClass key={item.id} color={item} handleDelete={handleDelete} />
      ))}
    </form>
  );
};

export default ColorsList;
