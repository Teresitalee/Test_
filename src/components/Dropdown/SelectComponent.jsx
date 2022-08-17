import React, { useEffect, useState } from "react";
import classes from "./Dropdown.module.scss";

const SelectComponent = React.forwardRef(
  (
    { options, placeholder = "", onChange, selectedKey, open, setOpen },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(placeholder);

    useEffect(() => {
      if (selectedKey) {
        setInputValue(options.find((o) => o.key === selectedKey).value);
      }
    }, [selectedKey, options]);

    useEffect(() => {
      if (!open && options.findIndex((o) => o.value === inputValue) === -1) {
        if (!inputValue) {
          onChange("");
        } else {
          if (selectedKey) {
            setInputValue(options.find((o) => o.key === selectedKey).value);
          } else {
            setInputValue("");
          }
        }
      }
    }, [open, options, selectedKey, inputValue, onChange]);

    const onOptionSelected = (option) => {
      onChange !== undefined && onChange(option.key);
      onChange !== undefined && setInputValue(option.value);
      setOpen(false);
    };

    return (
      <div className={classes} ref={ref}>
        <div className={`dropdown ${open ? "visible" : ""}`}>
          {options
            .filter((item) => {
              const searchTerm = inputValue.toLowerCase();
              const v = item.value.toLowerCase();

              if (!searchTerm) return true;

              return v.startsWith(searchTerm);
            })
            .map((opt) => (
              <div
                key={opt.key}
                onClick={() => onOptionSelected(opt)}
                className={classes.option}
                value={opt.key}
              >
                {opt.value}
              </div>
            ))}
        </div>
      </div>
    );
  }
);

export default SelectComponent;