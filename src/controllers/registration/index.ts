import { ApiLink } from "../../constants/ApiLink";
import UserSessionStorage from "../../storages/SessionStorage";
import axios from "axios";

const UserRegistration = async (email: string, password: string) => {
  try {
    const result = await axios.post(`${ ApiLink }/users/add`,{ email, password });
    if(result.status === 200){
      UserSessionStorage.writeUserSession(result.data.email, result.data.password);
      return { success: true, result };
    }
  }catch (e){
    return { success: false, error: e }
  }
}

export default UserRegistration;
