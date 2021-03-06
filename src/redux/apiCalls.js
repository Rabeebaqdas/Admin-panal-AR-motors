import { publicRequest, userRequest } from "../components/requestMethod";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { registerFailure, registerStart, registerSuccess } from "./registerRedux";
import { loginStart, loginSuccess, loginFailure, getUserStart, getUserSuccess, getUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure } from "./userRedux"

export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
        
    }catch(err){
        dispatch(loginFailure());
    }
}
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try{
        const res = await userRequest.get("/products")
        dispatch(getProductSuccess(res.data))
        
    }catch(err){
        dispatch(getProductFailure());
    }
}
export const deleteProduct = async (id,dispatch) => {
    dispatch(deleteProductStart());
    try{
       await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
        
    }catch(err){
        dispatch(deleteProductFailure());
    }
}
export const getUsers = async (dispatch) => {
    dispatch(getUserStart());
    try{
        const res = await userRequest.get("/users")
        dispatch(getUserSuccess(res.data))
        
    }catch(err){
        dispatch(getUserFailure());
    }
}
export const deleteUser = async (id,dispatch) => {
    dispatch(deleteUserStart());
    try{
         await userRequest.delete(`/users/${id}`)
        dispatch(deleteUserSuccess(id))
        
    }catch(err){
        dispatch(deleteUserFailure());
    }
}
export const updateProduct = async (id,product,dispatch) => {
    dispatch(updateProductStart());
    try{
        dispatch(updateProductSuccess({id,product}))
        
    }catch(err){
        dispatch(updateProductFailure());
    }
}
export const addProduct = async (product,dispatch) => {
    dispatch(addProductStart());
    try{
         const res = await userRequest.post(`/products`,product)
        dispatch(addProductSuccess(res.data))
        
    }catch(err){
        dispatch(addProductFailure());
    }
}
export const register = async (dispatch,user) => {
    dispatch(registerStart());
    try{
        const res = await publicRequest.post("/auth/register",user)
        dispatch(registerSuccess(res.data))
        
    }catch(err){
        dispatch(registerFailure());
    }
}
