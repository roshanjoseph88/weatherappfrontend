import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Search = () => {
  const { register, handleSubmit } = useForm();
  const [quary, setQuary] = useState();
  const FormProcessing = (data) => {
    console.log(data);
    setQuary((prevstate) => data);
    console.log(quary);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(FormProcessing)}>
        <input type="text" ref={register} name="searchQuary" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
