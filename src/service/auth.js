import axiosInstance from "./axiosInstance"

export const login  = async (formData) => {
   return await axiosInstance.post("/v3/user",formData);
     
}