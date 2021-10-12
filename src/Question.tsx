import { ChangeEvent } from "react";
import FiveButtons from "./FiveButtons";

const Question = (props: {
  children: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <label>
        {props.children}
        <br />
        <FiveButtons name={props.name} onChange={props.onChange} />
      </label>
      <br />
    </>
  );
};

export default Question;
