import axiosInstance from "./axiosInstance";

export const list  = async (first,max) => {
   return await axiosInstance.post("/v4/pickup/list",{first,max});
     
}