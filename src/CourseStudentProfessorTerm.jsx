import "./CourseStudentProfessorTerm.css";
import { useState, useEffect } from "react";

const CourseStudentProfessorTerm = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://sinabaradaran.iran.liara.run/course_student_professor_term`)
      .then((res) => res.json())
      .then((acData) => {
        setData(acData);
      });
  }, []);
  return (
    <>
      <div dir="ltr" className="CourseStudentProfessorTerm-container">
        <table id="CourseStudentProfessorTermTable">
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
    </>
  );
};
export default CourseStudentProfessorTerm;
