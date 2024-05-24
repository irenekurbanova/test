import "./select.css";
import { SelectProps } from "./types";

const Select = ({ value, options, name, onChange }: SelectProps) => {
  const disabled = Boolean(options?.length);
  return (
    <select className="select" name={name} onChange={onChange} value={value} disabled={!disabled}>
      <option value="" disabled>
        {name}
      </option>
      {options?.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Select;
