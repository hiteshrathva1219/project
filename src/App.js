import React from 'react';
import "./App.css";
import { Route,Routes } from 'react-router-dom';
import Home from "../src/pages/Home";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Navbar from "./components/common/Navbar";
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';
import { Toaster } from 'react-hot-toast';
import VerifyEmail from './pages/VerifyEmail';
import About from "./pages/About";
import ContactUs from './pages/ContactUs';
import MyProfile from './components/core/Dashboard/MyProfile';
import Dashboard from './pages/Dashboard';
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import Settings from "./components/core/Dashboard/Settings/index"
import AddCourses from "./components/core/Dashboard/AddCourses/index"
import MyCourses from './components/core/Dashboard/MyCourses';
import EditCourse from './components/core/Dashboard/EditCourses';
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from './components/core/Dashboard/Cart/Cart';
import CourseDetails from './pages/CourseDetails';
import Catalog from './pages/Catalog';
import VideoDetails from './components/core/ViewCourse/VideoDetails';
import ViewCourse from "./pages/ViewCourse";
import Instructor from "../src/components/core/Dashboard/InstrcutorDashboard/instructor"
import { ACCOUNT_TYPE } from './assest/utils/constants';

export default function App() {
    return (
       <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="forgot-password" element={<ForgotPassword/>}/>
        <Route path="update-password/:id" element={<UpdatePassword/>}/>
        <Route path="/verify-email" element={<VerifyEmail/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path='/course-details' element={<CourseDetails/>}/>
        <Route path="/catalog/:catalogName" element={<Catalog/>} />
        <Route
           element={
            <PrivateRoute>
               <Dashboard/>
            </PrivateRoute>
          }>
          <Route path='/dashboard/my-profile' element={<MyProfile/>}/>
          <Route path='/dashboard/settings' element={<Settings/>}/>
          <Route path='/dashboard/instructor' element={<Instructor/>}/>
          <Route path='/dashboard/add-course' element={<AddCourses/>}/>
          <Route path='/dashboard/my-courses' element={<MyCourses/>}/>
          <Route path='/dashboard/edit-course/:courseId' element={<EditCourse/>}/>
          <Route path='/dashboard/enrolled-courses' element={<EnrolledCourses/>}/>
          <Route path='/dashboard/cart' element={<Cart/>}/>
        </Route>

        <Route element={
        <PrivateRoute>
          <ViewCourse />
        </PrivateRoute>
      }>
      {
        // user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <Route 
            path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
            element={<VideoDetails/>}
          />
        // )
      }
      </Route>
        
      </Routes>
      </div>
    )
}