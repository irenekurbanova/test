import { useState } from "react";
import { FormProps } from "./types";
import { selectDefaultOptions } from "./constants";
import Select from "../select/select";
import "./form.css";

const Form = ({ data }: FormProps) => {
  const [selectValues, setSelectValues] = useState({
    country: "",
    city: "",
    universityType: "",
    accomodationType: "",
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Submitted");
  }

  function handleSelectChange(_: React.ChangeEvent<HTMLSelectElement>, id: string, value: string) {
    if (id === "country" && selectValues.country !== value) {
      setSelectValues((prev) => ({ ...prev, country: value, city: "", accomodationType: "" }));
    } else
      setSelectValues((prev) => ({
        ...prev,
        [id]: value,
      }));
  }

  const countries = data.countries.map((country) => country.name);

  const cities = data.cities.find((item) => item.country_id === selectValues.country)?.city;

  const accomodationOptions = data.accommodationType
    .filter((acc) => acc.country_id.includes(selectValues.country))
    .map((acc) => acc.accommodationOption);

  const btnDisabled = Object.values(selectValues).some((x) => x === "");

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1 className="h1">Заполните форму</h1>
      <Select
        value={selectValues.country}
        options={countries}
        name={selectDefaultOptions.country}
        onChange={(event) => handleSelectChange(event, "country", event.target.value)}
      />
      <Select
        value={selectValues.city}
        options={cities}
        name={selectDefaultOptions.city}
        onChange={(event) => handleSelectChange(event, "city", event.target.value)}
      />
      <Select
        value={selectValues.universityType}
        options={data.universityType}
        name={selectDefaultOptions.universityType}
        onChange={(event) => handleSelectChange(event, "universityType", event.target.value)}
      />
      <Select
        value={selectValues.accomodationType}
        options={accomodationOptions}
        name={selectDefaultOptions.accomodationType}
        onChange={(event) => handleSelectChange(event, "accomodationType", event.target.value)}
      />
      <button className="button" disabled={btnDisabled}>
        Submit
      </button>
    </form>
  );
};

export default Form;
