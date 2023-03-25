import React from "react";
import { addHash, isValidColorHex } from "../utils/colorValidation";
import { styleBtn } from "../utils/stylization";
import "./styles.scss";

interface Props {
  colorHex: string;
  setColorHex: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}
const InputForm: React.FC<Props> = ({ colorHex, setColorHex, handleAdd }) => {
  const handleSetColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = addHash(e.target.value);
    if (isValidColorHex(value)) {
      setColorHex(value.toUpperCase());
      styleBtn(value);
    }
  };
  return (
    <div>
      <form className="input_box" onSubmit={handleAdd}>
        <div className="inputColor">
          <div className="group">
            <input
              type="input"
              id="input-color"
              placeholder="#RRGGBB"
              className="input"
              value={colorHex}
              onChange={handleSetColor}
            />
            <button
              type="submit"
              className="btn"
              disabled={!(colorHex.length === 7)}>
              ADD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
