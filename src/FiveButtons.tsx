import { ChangeEvent } from "react";

const FiveButtons = (props: {
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <input
        type="radio"
        value="1"
        name={props.name}
        onChange={props.onChange}
      />
      1
      <input
        type="radio"
        value="2"
        name={props.name}
        onChange={props.onChange}
      />
      2
      <input
        type="radio"
        value="3"
        name={props.name}
        onChange={props.onChange}
      />
      3
      <input
        type="radio"
        value="4"
        name={props.name}
        onChange={props.onChange}
      />
      4
      <input
        type="radio"
        value="5"
        name={props.name}
        onChange={props.onChange}
      />
      5
    </>
  );
};

export default FiveButtons;
