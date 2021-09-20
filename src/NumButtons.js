import { NumActions } from "./redux/actions";

const NumButtons = ({ addN, subN }) => {
  return (
    <div>
      <button onClick={() => NumActions.add(addN)}>Add</button>
      <button onClick={() => NumActions.sub(subN)}>Sub</button>
    </div>
  );
};

export default NumButtons;
