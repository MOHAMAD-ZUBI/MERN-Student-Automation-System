import PropTypes from "prop-types";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "./contexts/Auth";
import Header from "./components/Header";
import Dashboard from "./components/student/Dashboard";
import Profile from "./components/student/Profile";
import DoctorProfile from "./components/academician/DoctorProfile";
import Requests from "./components/student/Requests";
import Courses from "./components/Courses";
import ProjectGroups from "./components/academician/seniorGroups/ProjectGroups";
import Department from "./components/student/Department";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";
import Course from "./components/student/Course";
import ProjectGroup from "./components/student/ProjectGroup";
import Login from "./components/Login";
import StudentLogin from "./components/student/StudentLogin";
import AcademicianLogin from "./components/academician/AcademicianLogin";
import ForgetPassword from "./components/ForgetPassword";
import Questions from "./components/chatbot/Questions";
import ErrorPage from "./components/ErrorPage";
import DoctorRequests from "./components/academician/DoctorRequests";
import DoctorCourse from "./components/academician/courses/DoctorCourse";
import DoctorProjectGroup from "./components/academician/DoctorProjectGroup";
import DoctorDashboard from "./components/academician/DoctorDashboard";
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
