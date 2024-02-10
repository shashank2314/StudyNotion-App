import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './components/Common/Navbar';
import About from "./Pages/About";
import Contact from "./Pages/Contact"
import Error from './Pages/Error';
import VideoDetails from "./components/ViewCourse/VideoDetails";

import Catalog from "./Pages/Catalog";
import Login from './Pages/Login';
import OpenRoute from './components/Auth/OpenRoute';
import Signup from './Pages/Signup';
import VerifyEmail from "./Pages/VerifyEmail";
import ForgotPassword from './Pages/ForgotPassword';
import UpdatePassword from './Pages/UpdatePassword';
import PrivateRoute from './components/Auth/PrivateRoute';
import Dashboard from './Pages/Dashboard';
import MyProfile from './components/Dashboard/MyProfile';
import Settings from "./components/Dashboard/Settings/index"
import { useSelector } from 'react-redux';
import { ACCOUNT_TYPE } from './utils/constants';
import Cart from "./components/Dashboard/Cart/index"

import MyCourses from "./components/Dashboard/MyCourses"
import AddCourse from "./components/Dashboard/AddCourse/index"
import Instructor from "./components/Dashboard/InstructorDashboard/Instructor"
import EnrolledCourses from "./components/Dashboard/EnrolledCourses"
import EditCourse from "./components/Dashboard/EditCourse/index"

import CourseDetails from "./Pages/CourseDetails";

function App() {

  const { user } = useSelector((state) => state.profile)

  return (
    <div className="w-screen min-h-screen font-inter bg-richblack-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* done */}
        <Route path="catalog/:catalogName" element={<Catalog />} />
          {/* done */}
        <Route
          path="/about"
          element={
            <About />
          }
        />
        {/* done */}


        <Route path="courses/:courseId" element={<CourseDetails />} />
        
        <Route path="/contact" element={<Contact />} />
          {/* done */}
        <Route path="/login" element={
          <OpenRoute>
            <Login />
          </OpenRoute>
        } />
        {/* done */}
        <Route path="/signup" element={
          <OpenRoute>
            <Signup />
          </OpenRoute>
        } />
        {/* done */}

        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        {/* done */}
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        {/* done */}

        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        {/* done */}

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          {/* done */}

          <Route path="dashboard/Settings" element={<Settings />} />
          {/* done */}


          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route path="dashboard/cart" element={<Cart />} />
                <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
              </>
            )
          }

          {
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              <>
                <Route path="dashboard/instructor" element={<Instructor />} />
                {/* done */}
                <Route path="dashboard/add-course" element={<AddCourse />} />
                {/* done */}
                <Route path="dashboard/my-courses" element={<MyCourses />} />
                {/* done */}
                <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
                {/* done */}
              </>
            )
          }


        </Route>
        <Route>
          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route
                  path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                  element={<VideoDetails />}
                />
              </>
            )
          }

        </Route>



        <Route path="*" element={<Error />} />
        {/* done */}

      </Routes>
    </div>
  );
}

export default App;
