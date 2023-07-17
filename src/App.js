import "./styles.css";
import { useEffect, useState } from "react";
import Table from "./Table";

export default function App() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("info", info);
  }, []);

  return <div className="App">{info && <Table data={info} />}</div>;
}
