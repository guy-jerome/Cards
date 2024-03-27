import "./styles.scss";
import Card from "./components/Card";
import axios from "axios";
import { useEffect, useState } from "preact/hooks";

export function App() {
  const [lang, setLang] = useState([]);

  useEffect(() => {
    async function getLang() {
      const response = await axios.get("http://localhost:3000/api");
      setLang(response.data);
    }
    getLang();
  }, []);

  return (
    <div className="card-container">
      {lang.length > 0
        ? lang.map((language: object) => (
            <Card key={language.id} language={language} />
          ))
        : null}
    </div>
  );
}
