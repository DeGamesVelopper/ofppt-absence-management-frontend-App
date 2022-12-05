
import axios from "axios"
import { LOGOUT,LOGIN__PROCCESS, LOGIN__SUCCESS, UNAUTHORIZED_ERROR } from "./TYPES"


const login = (username,pwd) => async(dispatch) =>{
   
  dispatch({type : LOGIN__PROCCESS})
  try {
    const res = await axios.post('api/admin/login', {username,password:pwd})
   if (!res.data) return  dispatch({type : UNAUTHORIZED_ERROR})
    dispatch({
      type : LOGIN__SUCCESS,
      token : res.data.token
    })
  //  err.response.data.error Handle it later
  } catch (err) {
    return  dispatch({type : UNAUTHORIZED_ERROR})
  }
}

const logout = ()=> dispatch =>{
   dispatch({
     type: LOGOUT
   })
}


export{
  login,
  logout
}