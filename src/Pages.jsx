import { Routes, Route, Link } from "react-router-dom";
import Queries from "./Queries";
import Home from "./Home";
import ShowTable from "./ShowTable";
import DataModel from "./DataModel";
import Students from "./Students";
import Courses from "./Courses";
import Groups from "./Groups";
import Professors from "./Professors";
import Terms from "./Terms";
import GroupsCourse from "./GroupsCourse";
import GroupsStudent from "./GroupsStudent";
import CourseStudentProfessorTerm from "./CourseStudentProfessorTerm";
const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/queries" element={<Queries />} />
          <Route path="/querys/:index" element={<ShowTable />} />
          <Route path="/dataModel" element={<DataModel />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/professors" element={<Professors />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/group-course" element={<GroupsCourse />} />
          <Route path="/group-student" element={<GroupsStudent />} />
          <Route
            path="/course-student-professor-term"
            element={<CourseStudentProfessorTerm />}
          />
        </Route>

        {/* <Route path="datamodel" />
        <Route path="data" /> */}
      </Routes>
    </>
  );
};
export default Pages;
