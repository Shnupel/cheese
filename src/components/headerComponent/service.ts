import UserSessionStorage from "../../storages/SessionStorage";

export const CheckIsLogin = () => {
  const userData =  UserSessionStorage.haveUserSession();
  const userDataKeys = Object.keys(userData);
  const isAuth = userData !== "" && userDataKeys.length !== 0;
  return { isAuth, userData };
}
