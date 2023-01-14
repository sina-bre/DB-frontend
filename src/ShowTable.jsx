import "./ShowTable.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ShowTable = () => {
  const navigate = useNavigate();
  const { index } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://sinabaradaran.iran.liara.run/query${index}`)
      .then((res) => res.json())
      .then((acData) => {
        setData(acData);
      });
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  const backOnClickHandler = () => {
    navigate(`/queries`);
  };
  return (
    <>
      <div dir="ltr" className="Showtable-container">
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
        <div className="Showtable-container-back-div">
          <div
            className="Showtable-container-back"
            onClick={backOnClickHandler}
          >
            Back
          </div>
        </div>
      </div>
    </>
  );
};
export default ShowTable;
