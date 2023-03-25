import React from "react";
import { Filter } from "../model";
import "./styles.scss";

interface Props {
  filters: Filter[];
  setFilter: (filter: Filter) => void;
}
const Filters: React.FC<Props> = ({ filters, setFilter }) => {
  return (
    <>
      <div className="filter">
        {filters.map((el) => (
          <div key={el.id} className="one-filter">
            <label htmlFor={el.id}>{el.name} </label>
            <input
              type="checkbox"
              id={el.id}
              onChange={(e) => setFilter(el)}
              className={el.id}
            />
          </div>
        ))}
      </div>
      <div className="colorLine" />
    </>
  );
};

export default Filters;
