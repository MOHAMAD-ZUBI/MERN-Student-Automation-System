import PropTypes from "prop-types";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "./components/Auth";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import DoctorProfile from "./components/DoctorProfile";
import Requests from "./components/Requests";
import Courses from "./components/Courses";
import ProjectGroups from "./components/ProjectGroups";
import Department from "./components/Department";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";
import Course from "./components/Course";
import ProjectGroup from "./components/ProjectGroup";
import Login from "./components/Login";
import StudentLogin from "./components/StudentLogin";
import AcademicianLogin from "./components/AcademicianLogin";
import ForgetPassword from "./components/ForgetPassword";
import Questions from "./components/Questions";
import ErrorPage from "./components/ErrorPage";
import DoctorRequests from "./components/DoctorRequests";
import DoctorCourse from "./components/DoctorCourse";
import DoctorProjectGroup from "./components/DoctorProjectGroup";
import DoctorDashboard from "./components/DoctorDashboard";

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
    <AuthProvider>
      <Layout>
        {admin === "student" && <Route path="/" element={<Dashboard />} />}
        {admin === "doctor" && <Route path="/" element={<DoctorDashboard />} />}
        <Route path="login" element={<Login />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/academician" element={<AcademicianLogin />} />
        <Route path="/resetPassword" element={<ForgetPassword />} />
        {admin === "student" && <Route path="profile" element={<Profile />} />}
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
        {admin === "student" && <Route path="course" element={<Course />} />}
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
    </AuthProvider>
  );
};

export default App;
