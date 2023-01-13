import "./Students.css";
import { useState, useEffect } from "react";

const Students = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://sinabaradaran.iran.liara.run/students`)
      .then((res) => res.json())
      .then((acData) => {
        setData(acData);
      });
  }, []);
  return (
    <div dir="ltr" className="studentTable-container">
      <table id="mainTable">
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
export default Students;
