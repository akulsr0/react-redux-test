import { useSelector } from "react-redux";

export const useNumState = () => {
  const numState = useSelector((s) => s.numReducer);
  return numState;
};

export const useStringState = () => {
  const stringState = useSelector((s) => s.stringReducer);
  return stringState;
};
