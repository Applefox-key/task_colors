import React, { useEffect, useState } from "react";
import "./App.scss";
import { API_LS } from "./api/api";
import ColorsList from "./components/ColorsList";
import Filters from "./components/Filters";
import InputForm from "./components/InputForm";
import { filtersList } from "./constants/filters";
import { ColorHex, Filter } from "./model";
import { colorsFilterSort } from "./utils/colorSorting";
import { hex2rgb } from "./utils/hexToRgb";
import { styleBtn } from "./utils/stylization";

const App = () => {
  const [colorHex, setColorHex] = useState<string>("");
  const [colors, setColors] = useState<ColorHex[]>(API_LS.fromLS());
  const [filters, setFilters] = useState<Filter[]>(filtersList);
  const [colorsSortedFiltred, setColorsSortedFiltred] = useState<ColorHex[]>(
    []
  );
  useEffect(() => {
    setColorsSortedFiltred(colorsFilterSort([...colors], filters));
  }, [colors, filters]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (colorHex) {
      let newColors: ColorHex[] = [
        ...colors,
        {
          id: Date.now(),
          name: colorHex,
          isDefault: false,
          rgb: hex2rgb(colorHex),
        },
      ];
      setColors(newColors);
      API_LS.toLS(newColors);
      setColorHex("");
      styleBtn("white");
    }
  };
  const setFilter = (filter: Filter): void => {
    setFilters(
      filters.map((el: Filter) =>
        el.id === filter.id ? { ...el, isChecked: !el.isChecked } : el
      )
    );
  };

  const handleDelete = (color: ColorHex): void => {
    setColors(colors.filter((item) => item.id !== color.id));
  };

  return (
    <div className="App">
      <span>LIST OF THE COLORS</span>
      <InputForm
        colorHex={colorHex}
        setColorHex={setColorHex}
        handleAdd={handleAdd}
      />
      <br />
      <Filters filters={filters} setFilter={setFilter} />
      <ColorsList colors={colorsSortedFiltred} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
