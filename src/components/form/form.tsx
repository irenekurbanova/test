import { useReducer } from "react";
import { selectDefaultOptions } from "./constants";
import Select from "../select/select";
import "./form.css";
import type { FormProps } from "./types";
import { Accomodation, Country } from "../../data/types";
import { ActionType, init, reducer } from "./reducer";

const Form = ({ data }: FormProps) => {
  const [state, dispatch] = useReducer(reducer, init);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Submitted");
  }

  function handleSelectChange(id: ActionType, value: string) {
    dispatch({ type: id, payload: value });
  }

  const countries = data.countries.map((country) => country.name);

  const cities = data.cities.find((item) => item.country === state.country)?.city;

  const accomodationOptions = data.accommodationType
    .filter((acc) => acc.country.includes(state.country as Country))
    .map((acc) => acc.accommodationOption);

  const paymentOptions = data.paymentType
    .filter((acc) => acc.accomodation.includes(state.accomodationType as Accomodation))
    .map((acc) => acc.paymentOption);

  const btnDisabled = Object.values(state).some((x) => x === "");

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1 className="h1">Заполните форму</h1>
      <Select
        value={state.country}
        options={countries}
        name={selectDefaultOptions.country}
        onChange={(event) => handleSelectChange(ActionType.country, event.target.value)}
      />
      <Select
        value={state.city}
        options={cities}
        disabled={state.country === ""}
        name={selectDefaultOptions.city}
        onChange={(event) => handleSelectChange(ActionType.city, event.target.value)}
      />
      <Select
        value={state.universityType}
        options={data.universityType}
        name={selectDefaultOptions.universityType}
        onChange={(event) => handleSelectChange(ActionType.universityType, event.target.value)}
      />
      <Select
        value={state.accomodationType}
        options={accomodationOptions}
        disabled={state.city === ""}
        name={selectDefaultOptions.accomodationType}
        onChange={(event) => handleSelectChange(ActionType.accomodationType, event.target.value)}
      />
      <Select
        value={state.paymentType}
        options={paymentOptions}
        disabled={state.accomodationType === ""}
        name={selectDefaultOptions.paymentType}
        onChange={(event) => handleSelectChange(ActionType.paymentType, event.target.value)}
      />
      <button className="button" disabled={btnDisabled}>
        Submit
      </button>
    </form>
  );
};

export default Form;
