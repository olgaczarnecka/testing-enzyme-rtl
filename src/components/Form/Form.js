import React, { useState } from "react";

import "./form.scss";

const Form = ({ togglePopUp }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    togglePopUp();
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-field-label" htmlFor="name">
        <span className="form-field--title">Imię:</span>
        <input
          id="name"
          className="form-field--input"
          type="text"
          name="name"
          value={value}
          onChange={handleChange}
          required
        />
      </label>
      <input
        type="submit"
        value="Wyślij"
        disabled={!value}
        className="custom-button"
      />
    </form>
  );
};

export default Form;
