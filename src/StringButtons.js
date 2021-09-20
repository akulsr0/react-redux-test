import { StringActions } from "./redux/actions";

const StringButtons = () => {
  return (
    <div>
      <button onClick={StringActions.uppercase}>Uppercase</button>
      <button onClick={StringActions.lowercase}>Lowercase</button>
    </div>
  );
};

export default StringButtons;
