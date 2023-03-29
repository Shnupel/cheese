import { ApiLink } from "../../constants/ApiLink";
import UserSessionStorage from "../../storages/SessionStorage";
import axios from "axios";

const UserAuth = async (email: string, password: string) =>{
  try {
    const result = await axios.post(`${ ApiLink }/users/auth/`, { email, password });
    if(result.status === 200){
      UserSessionStorage.writeUserSession(result.data.email, result.data.password);
      return { success: true, result };
    }else{
      sessionStorage.setItem("userSession", "");
      return { success: false };
    }
  }catch (e){
    return { error: e, success: false }
  }
}

export default UserAuth;
