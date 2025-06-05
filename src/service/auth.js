import axiosInstance from "./axiosInstance"

export const login  = async (formData) => {
   return await axiosInstance.post("/v3/user",formData);
     
}

export const logout = async () => {
return await axiosInstance.post("/v3/user/revoke_access_token_by_username",{});

}