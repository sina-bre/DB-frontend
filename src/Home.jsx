import { Outlet } from "react-router-dom";
import "./Home.css";
import { HiClipboardList } from "react-icons/hi";
import { HiDatabase } from "react-icons/hi";
import { HiAcademicCap } from "react-icons/hi";
import { HiBriefcase } from "react-icons/hi";
import { HiPresentationChartBar } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi";
import { HiCollection } from "react-icons/hi";
import { HiCurrencyEuro } from "react-icons/hi";
import { HiCurrencyPound } from "react-icons/hi";
import { HiCurrencyYen } from "react-icons/hi";
import { HiCloudDownload } from "react-icons/hi";
import { HiCloudUpload } from "react-icons/hi";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      {/* <div dir="rtl" className="header">
        <div>محمد سینا برادران افتخاری</div>
        <div>39809907</div>
        <div>پروژه درس پایگاه داده</div>
      </div> */}
      <div className="Home-container" dir="ltr">
        <div className="navbar">
          <div className="name-div">
            <div className="name">سینا برادران</div>
          </div>
          <div className="nav-item-div">
            <div className="nav-item">
              <div className="icon-div">
                <HiClipboardList size={25} color="#7a849a" />
              </div>
              <Link to="/queries">Queries</Link>
            </div>
          </div>
          <div className="nav-item-div">
            <div className="nav-item">
              <div className="icon-div">
                <HiDatabase size={25} color="#7a849a" />
              </div>
              <Link to="/dataModel">Data Model</Link>
            </div>
          </div>
          <div className="nav-item-div">
            <div className="nav-item">
              <div className="icon-div">
                <HiAcademicCap size={25} color="#7a849a" />
              </div>
              <Link to="/students">Students</Link>
            </div>
          </div>
          <div className="nav-item-div">
            <div className="nav-item">
              <div className="icon-div">
                <HiPresentationChartBar size={25} color="#7a849a" />
              </div>
              <Link to="/courses">Courses</Link>
            </div>
          </div>
          <div className="nav-item-div">
            <div className="nav-item">
              <div className="icon-div">
                <HiUserGroup size={25} color="#7a849a" />
              </div>
              <Link to="/groups">Groups</Link>
            </div>
          </div>
          <div className="nav-item-div">
            <div className="nav-item">
              <div className="icon-div">
                <HiBriefcase size={25} color="#7a849a" />
              </div>
              <Link to="/professors">Professors</Link>
            </div>
          </div>
          <div className="nav-item-div">
            <div className="nav-item">
              <div className="icon-div">
                <HiCollection size={25} color="#7a849a" />
              </div>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
          <div className="nav-item-div">
            <div className="nav-item">
              <div className="icon-div">
                <HiCurrencyEuro size={25} color="#7a849a" />
              </div>
              <Link to="/group-course">Group_Course</Link>
            </div>
          </div>
          <div className="nav-item-div">
            <div className="nav-item">
              <div className="icon-div">
                <HiCurrencyPound size={25} color="#7a849a" />
              </div>
              <Link to="/group-student">Group_Student</Link>
            </div>
          </div>
          <div className="nav-item-div">
            <div className="nav-item">
              <div className="icon-div">
                <HiCurrencyYen size={25} color="#7a849a" />
              </div>
              <Link to="/course-student-professor-term">CSPT</Link>
            </div>
          </div>
          <div className="nav-item-div">
            <div className="nav-item">
              <div className="icon-div">
                <HiCloudDownload size={25} color="#7a849a" />
              </div>
              <a href="https://github.com/sina-bre/DB-backend">
                Backend On Github
              </a>
            </div>
          </div>
          <div className="nav-item-div">
            <div className="nav-item">
              <div className="icon-div">
                <HiCloudUpload size={25} color="#7a849a" />
              </div>
              <a href="https://github.com/sina-bre/DB-frontend">
                Frontend On Github
              </a>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};
export default Home;
