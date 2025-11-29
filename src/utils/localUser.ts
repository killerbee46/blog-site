import { getUsers } from "../api/AuthApi";

export const localUser = () => {
const tempUser = localStorage.getItem('user')
return tempUser && tempUser != undefined &&
    Object.keys(tempUser).length !== 0 ?
    JSON.parse(tempUser) :
    false;
}

export const getToken = () => {
    const tempToken = localStorage.getItem('token')
    return tempToken && tempToken != undefined &&
    tempToken !== "" ?
    tempToken :
    false;
}

export const login = async(data:any) => {
    const tempUser = await getUsers({}).then(async(res)=>{
        const temp = await res?.data
        const userExists = await temp?.find((f:any)=>f?.email === data?.email)

    if (userExists && Object.keys(userExists).length !== 0) {
        if (userExists?.password === data?.password) {
            delete userExists.password
            localStorage.setItem("token",data?.email)
            localStorage.setItem("user",JSON.stringify(userExists))
            return {
            success:true,
            message:"Logged in successfully"
        }
        } else {
            return {
            success:false,
            error:"Invalid Password"
        }
        }
    }

    if (!userExists) {
        return {
            success:false,
            error:"User Not Registered"
        }
    }
    })
   return tempUser
}

export const logout = () => {
    localStorage.removeItem("token")
            localStorage.removeItem("user")
            window.location.href = "/"
}