import React, { useState } from "react";
import "./search.css";
import { useForm } from "react-hook-form";

import SearchIcon from "./Group 4.png";

export const Search = () => {
  const { register, handleSubmit } = useForm();
  const [quary, setQuary] = useState();
  const FormProcessing = (data) => {
    console.log(data);
    setQuary((prevstate) => data);
    console.log(quary);
  };
  return (
    <form onSubmit={handleSubmit(FormProcessing)}>
      <input type="text" ref={register} name="searchQuary" />
      <button type="submit">
        <img
          className="form-searchbutton"
          src={SearchIcon}
          alt="searchbutton"
        />
      </button>
    </form>
  );
};
