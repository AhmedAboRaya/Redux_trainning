// import { useCallback, memo } from "react";
import { increment } from "../app/feature/counter/counterSlice.ts";
import { RootState } from "../app/store.ts";
import Button from "./ui/Button";
import { useSelector, useDispatch } from "react-redux";



const Counter = () => {
  const {value} = useSelector((state: RootState) => state.counter );
  const {value: modeValue} = useSelector((state: RootState) => state.mode );
  const { lang } = useSelector((state: RootState) => state.languages);
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: modeValue? "black" : "white" }}>
      <h1 style={{ color: modeValue? "white" : "black" }}>
        {lang === "en"? "Hello" :
          lang === "ar"? "مرحبا" :
          lang === "fr"? "Bonjour" :
          lang === "es"? "Hola" :
          "Hello"
        
        }
        </h1>
      <h3 style={{ color: modeValue? "white" : "black" }}>
        {lang === "en" ? "Counter" :
          lang === "ar" ? "العداد" :
          lang === "fr" ? "comptoir" :
          lang === "es" ? "encimera" :
          "Counter"} {value}</h3>
      <Button onClick={ () => dispatch(increment(value+1)) }>
        {
          lang === "en" ? "Increment" :
          lang === "ar" ? "اضف" :
          lang === "fr" ? "augmenter" :
          lang === "es" ? "Incrementar" :
          "Increment"
        }
        </Button>
    </div>
  );
};

export default Counter;