import { useState } from "react";
import SelectComponent from "./SelectComponent";
import Form from './Form';
import classes from "./Dropdown.module.scss";


const options = [
  { key: 1, value: "Beneficiario 1" }
];

export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className={classes.app}>
      <SelectComponent
        options={options}
        onChange={(item) => setSelectedOption(item)}
        selectedKey={selectedOption}
      />
      <div className={classes}>
       <Form />{selectedOption}
      </div>
    </div>
  );
}
