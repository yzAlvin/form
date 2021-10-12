import { ChangeEvent, FormEvent, useState } from "react";
import { FormInputs } from "./FormInputs";
import Question from "./Question";

const Form = () => {
  const [inputs, setInputs] = useState<FormInputs>({
    overallExperience: "",
    ambitiousWork: "",
    mundaneWork: "",
    comfortableWork: "",
    other: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Question name="overallExperience" onChange={handleChange}>
        Indicate which best describes your overall experience in your current
        team rotation over this period
      </Question>
      <Question name="ambitiousWork" onChange={handleChange}>
        How much of the work you did would you rate as ambitious?
      </Question>
      <Question name="mundaneWork" onChange={handleChange}>
        How much of the work you did would you rate as mundane?
      </Question>
      <Question name="comfortableWork" onChange={handleChange}>
        How much of the work you did would you rate as comfortable?
      </Question>
      <label>
        Is there anything else?
        <br />
        <input
          type="textarea"
          value={inputs.other || ""}
          name="other"
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
