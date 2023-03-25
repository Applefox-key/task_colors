import React, { Component } from "react";
import { ColorHex } from "../model";
import { styleColor } from "../utils/stylization";

import "./styles.scss";

interface Props {
  color: ColorHex;
  handleDelete: (color: ColorHex) => void;
}

class OneColorClass extends Component<Props> {
  componentDidMount() {
    const { color } = this.props;
    styleColor(color);
  }

  render() {
    const { color, handleDelete } = this.props;

    return (
      <div>
        <div className="one_color">
          <div>
            <div
              id={color.id.toString()}
              data-id={color.id}
              className="color_box"
            />
            <div>{color.name}</div>
          </div>
          <button
            className={"delete_button" + (color.isDefault ? " hide" : "")}
            onClick={(e) => {
              e.preventDefault();
              handleDelete(color);
            }}>
            x
          </button>
        </div>
      </div>
    );
  }
}

export default OneColorClass;
