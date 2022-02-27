import { publicRequest } from "../requestMethods"
import { loginFailure, loginStart, loginSuccess } from "./userReducer"

//we will  call this login function in the login page in the pages folder

export const login = async(dispatch , user)=>{
    //we are dispation loginsTart which is comming from userReducer
    dispatch(loginStart())
    try{
            // full backend route is  http://localhost:3000/api/auth/login
        const res = await publicRequest.post("/auth/login" , user)
        
        dispatch(loginSuccess(res.data))

    }catch(err){
        //if there is error we will dispatch login failure
        dispatch(loginFailure())
    }
}