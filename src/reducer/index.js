import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import profilerReducer from "../slices/profileSlice";
import createReducer from "../slices/cartSlice";
import courseReducer from "../slices/courseSlice";
import viewcourseReducer  from "../slices/viewCourseSlice"

const rootReducer = combineReducers({
   auth:authReducer,
   profile:profilerReducer,
   cart:createReducer,
   course:courseReducer,
   viewCourse:viewcourseReducer
})
export default rootReducer