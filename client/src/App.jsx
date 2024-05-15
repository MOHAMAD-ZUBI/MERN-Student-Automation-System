import PropTypes from "prop-types";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "./contexts/Auth";
import Header from "./components/Header";
// student pages
import Dashboard from "./components/student/Dashboard";
import Profile from "./components/student/Profile";
import Requests from "./components/student/request/Requests";
import Department from "./components/student/Department";
import Course from "./components/student/Course";
import StudentLogin from "./components/student/StudentLogin";
import ProjectGroup from "./components/student/ProjectGroup";

// academician pages
import DoctorProfile from "./components/academician/DoctorProfile";
import ProjectGroups from "./components/academician/seniorGroups/ProjectGroups";
import AcademicianLogin from "./components/academician/AcademicianLogin";
import DoctorCourse from "./components/academician/courses/DoctorCourse";
import DoctorProjectGroup from "./components/academician/DoctorProjectGroup";
import DoctorDashboard from "./components/academician/DoctorDashboard";
import DoctorRequests from "./components/academician/DoctorRequests";

import Courses from "./components/Courses";
import Academician from "./components/Academician";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import Questions from "./components/chatbot/Questions";
import ErrorPage from "./components/ErrorPage";
import { NextUIProvider } from "@nextui-org/react";

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage =
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/resetPassword");
  return (
    <div className="bg-white min-h-[100vh] overflow-hidden relative">
      {!isLoginPage && <Header />}
      <Routes>{children}</Routes>
      {!isLoginPage && <Questions />}
      {!isLoginPage && <Footer />}
      {!isLoginPage && <MobileFooter />}
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node,
};

const App = () => {
  const navigate = useNavigate();
  const admin = sessionStorage.getItem("admin");

  useEffect(() => {
    window.onload = () => {
      if (!admin) {
        navigate("/login", { replace: true });
      }
    };
  }, [navigate, admin]);

  return (
    <NextUIProvider>
      <AuthProvider>
        <div className="size-auto">
          <Layout>
            {admin === "student" && <Route path="/" element={<Dashboard />} />}
            {admin === "doctor" && (
              <Route path="/" element={<DoctorDashboard />} />
            )}
            <Route path="login" element={<Login />} />
            <Route path="/login/student" element={<StudentLogin />} />
            <Route path="/login/academician" element={<AcademicianLogin />} />
            <Route path="/resetPassword" element={<ForgetPassword />} />
            <Route path="academician" element={<Academician />} />
            {admin === "student" && (
              <Route path="profile" element={<Profile />} />
            )}
            {admin === "doctor" && (
              <Route path="profile" element={<DoctorProfile />} />
            )}
            {admin === "student" && (
              <Route path="requests" element={<Requests />} />
            )}
            {admin === "doctor" && (
              <Route path="requests" element={<DoctorRequests />} />
            )}
            <Route path="courses" element={<Courses />} />
            {admin === "student" && (
              <Route path="course" element={<Course />} />
            )}
            {admin === "doctor" && (
              <Route path="course" element={<DoctorCourse />} />
            )}
            {admin === "doctor" && (
              <Route path="senior-project-groups" element={<ProjectGroups />} />
            )}
            {admin === "student" && (
              <Route path="project-group" element={<ProjectGroup />} />
            )}
            {admin === "doctor" && (
              <Route path="project-group" element={<DoctorProjectGroup />} />
            )}
            <Route path="department" element={<Department />} />
            <Route path="*" element={<ErrorPage />} />
          </Layout>
        </div>
      </AuthProvider>
    </NextUIProvider>
  );
};

export default App;
