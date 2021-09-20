import { useNumState, useStringState } from "./hooks";
import NumButtons from "./NumButtons";
import StringButtons from "./StringButtons";

export default function App() {
  const numState = useNumState();
  const stringState = useStringState();

  return (
    <div>
      <div>{JSON.stringify(numState)}</div>
      <NumButtons addN={10} subN={3} />
      <div>{JSON.stringify(stringState)}</div>
      <StringButtons />
      <div></div>
    </div>
  );
}
