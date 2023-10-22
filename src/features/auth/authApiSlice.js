import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Register user
export const createUser = createAsyncThunk("auth/createUser", async (data) => {
   try {
     const response = await axios.post('http://localhost:5050/api/auth/register', data, {
      withCredentials: true,
      
     })
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})


// Login user
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
   try {
     const response = await axios.post('http://localhost:5050/api/auth/login', data, {
      withCredentials: true,
     })
     console.log(response.data);
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})


// Login user
export const logoutUser = createAsyncThunk("auth/logoutUser", async (data) => {
   try {
     const response = await axios.post('http://localhost:5050/api/auth/logout', "", {
      withCredentials: true,
     })
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})



// LoggedIn user
export const loggedInUser = createAsyncThunk("auth/loggedInUser", async () => {
   try {
     const response = await axios.get('http://localhost:5050/api/auth/me', {
      withCredentials: true,
     })
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})