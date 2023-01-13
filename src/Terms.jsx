import "./Terms.css";
import { useState, useEffect } from "react";

const Terms = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://sinabaradaran.iran.liara.run/terms`)
      .then((res) => res.json())
      .then((acData) => {
        setData(acData);
      });
  }, []);
  return (
    <div dir="ltr" className="termTable-container">
      <table id="termTable">
        {data.map((item, index) => (
          <>
            <tr>
              {index === 0 &&
                Object.keys(item).map((head, hIndex) => (
                  <th key={hIndex}>{head}</th>
                ))}
            </tr>
            <tr>
              {Object.values(item).map((value) => (
                <td>{value}</td>
              ))}
            </tr>
          </>
        ))}
      </table>
    </div>
  );
};
export default Terms;
