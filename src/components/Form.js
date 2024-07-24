import { useContext, useState } from "react";
import { InformationContext } from "../contexts/InformationContext";

export const Form = () => {
  const { setInfo } = useContext(InformationContext);
  const [formValues, setFormValues] = useState({name: '', age: ''});

  const handleChange = (e) => {
    const {placeholder, value} = e.target;
    setFormValues({...formValues, [placeholder]: value})
  }

  const handleSubmit = () => {
    setInfo(formValues);
    setFormValues({name: '', age: ''})
  }

  return (
    <>
      <input placeholder="name" value={formValues.name} onChange={handleChange} />
      <input placeholder="age" value={formValues.age} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
