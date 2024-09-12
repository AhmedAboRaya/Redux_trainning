import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import Button from "../ui/Button";
import React, { useState } from "react";
import { changeLang } from "../../app/feature/language/langSlice";

const ChangeLanguage = () => {
  const { lang } = useSelector((state: RootState) => state.languages);
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState(lang);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(changeLang(selectedLanguage));
  };

  return (
    <div>
      <h3>
        {lang === "en"
          ? "Current Language: English"
          : lang === "fr"
          ? "Langue actuelle: Français"
          : lang === "es"
          ? "Idioma actual: Español"
          : "اللغة الحالية: العربية"}
      </h3>
      <form onSubmit={handleSubmit} style={{ display: "grid" }}>
        <select
          value={selectedLanguage}
          onChange={handleSelectChange}
          style={{ margin: "10px", height: "40px" }}
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="ar">العربية</option>
        </select>
        <Button type="submit" style={{ margin: "10px" }}>
          {lang === "en"
            ? "Change language..."
            : lang === "fr"
            ? "Changer langue"
            : lang === "es"
            ? "Cambiar idioma"
            : "تغيير اللغه"}
        </Button>
      </form>
    </div>
  );
};

export default ChangeLanguage;
