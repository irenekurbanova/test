import "./select.css";
import type { SelectProps } from "./types";

const Select = ({ value, options, name, disabled, onChange }: SelectProps) => {
  return (
    <select className="select" name={name} onChange={onChange} value={value} disabled={disabled}>
      <option value="">{name}</option>
      {options?.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Select;
