import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  step: 1,
  course: localStorage.getItem("course")?JSON.parse(localStorage.getItem("course")):null,
  editCourse: localStorage.getItem("editCourse")?JSON.parse(localStorage.getItem("editCourse")):null,
  paymentLoading: false,
}

const courseSlice = createSlice({
  name: "course",
  initialState:initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload
    },
    setCourse: (state, action) => {
      state.course = action.payload
    },
    setEditCourse: (state, action) => {
      state.editCourse = action.payload
    },
    setPaymentLoading: (state, action) => {
      state.paymentLoading = action.payload
    },
    resetCourseState: (state) => {
      state.step = 1
      state.course = null
      state.editCourse = false
    },
  },
})

export const {
  setStep,
  setCourse,
  setEditCourse,
  setPaymentLoading,
  resetCourseState,
} = courseSlice.actions

export default courseSlice.reducer