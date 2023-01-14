import { Outlet } from "react-router-dom";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div dir="rtl" className="header">
        <div>محمد سینا برادران افتخاری</div>
        <div>39809907</div>
        <div>پروژه درس پایگاه داده</div>
      </div>
      <div className="Home-container">
        <Outlet />
        <div className="navbar" dir="ltr">
          <div className="nav-item">
            <Link to="/querys">Querys</Link>
          </div>
          <div className="nav-item">
            <Link to="/dataModel">Data Model</Link>
          </div>
          <div className="nav-item">
            <Link to="/students">Students</Link>
          </div>
          <div className="nav-item">
            <Link to="/courses">Courses</Link>
          </div>
          <div className="nav-item">
            <Link to="/groups">Groups</Link>
          </div>
          <div className="nav-item">
            <Link to="/professors">Professors</Link>
          </div>
          <div className="nav-item">
            <Link to="/terms">Terms</Link>
          </div>
          <div className="nav-item">
            <Link to="/group-course">Groupe_Course</Link>
          </div>
          <div className="nav-item">
            <Link to="/group-student">Groupe_Student</Link>
          </div>
          <div className="nav-item">
            <Link to="/course-student-professor-term">
              Course_Student_Professor-Term
            </Link>
          </div>
          <div className="nav-item">
            <a href="https://github.com/sina-bre/DB-backend">
              Backend On Github
            </a>
          </div>
          <div className="nav-item">
            <a href="https://github.com/sina-bre/DB-frontend">
              Frontend On Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
