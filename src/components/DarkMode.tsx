import { changeMode } from "../app/feature/dark/darkSlice";
import { RootState } from "../app/store";
import Button from "./ui/Button";
import { UseSelector, useDispatch, useSelector } from "react-redux";

const DarkMode = ({}: IProps) => {
  const { value, text } = useSelector((state: RootState) => state.mode);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{value ? "Dark Mode" : "White Mode"}</h3>
      <Button onClick={() => dispatch(changeMode())}>{text}</Button>
    </div>
  );
};

export default DarkMode;
