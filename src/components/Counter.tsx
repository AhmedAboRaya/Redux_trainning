// import { useCallback, memo } from "react";
import { increment } from "../app/feature/counter/counterSlice.ts";
import { RootState } from "../app/store.ts";
import Button from "./ui/Button";
import { useSelector, useDispatch } from "react-redux";



const Counter = () => {
  const {value,text} = useSelector((state: RootState) => state.counter );
  const {value: modeValue} = useSelector((state: RootState) => state.mode );
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: modeValue? "black" : "white" }}>
      <h3 style={{ color: modeValue? "white" : "black" }}>Counter {value}</h3>
      <Button onClick={ () => dispatch(increment(value+1)) }>{text}</Button>
    </div>
  );
};

export default Counter;