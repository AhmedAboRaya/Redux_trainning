import { changeMode } from "../app/feature/dark/darkSlice";
import { RootState } from "../app/store";
import Button from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";

const DarkMode = () => {
  const { value } = useSelector((state: RootState) => state.mode);
  const { lang } = useSelector((state: RootState) => state.languages);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>
        {
            lang === "en"
             ? !value
               ? "Current Mode: Light"
                : "Current Mode: Dark"
              : lang === "fr"
             ? !value
               ? "Mode Actuel: Clair"
                : "Mode Actuel: Sombre"
              : lang === "es"
             ? !value
               ? "Modo Actual: Claro"
                : "Modo Actual: Oscuro"
              : lang === "ar"
             ? !value
               ? "وضع الحالي: منير"
                : "وضع الحالي: مظلم"
              : "Current Mode"
        }
      </h3>
      <Button onClick={() => dispatch(changeMode())}>
        {lang === "en"
          ? value
            ? "Switch to Light Mode"
            : "Switch to Dark Mode"
          : lang === "fr"
          ? value
            ? "Passer en Mode Clair"
            : "Passer en Mode Sombre"
          : lang === "es"
          ? value
            ? "Cambiar a Modo Claro"
            : "Cambiar a Modo oscuro"
          : lang === "ar"
          ? value
            ? "انتقل الي الوضع المنير"
            : "انتقل الي الوضع المظلم"
          : "Switch Mode"}
      </Button>
    </div>
  );
};

export default DarkMode;
