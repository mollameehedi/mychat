import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : null,
}

export const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser } = loginSlice.actions

export default loginSlice.reducer