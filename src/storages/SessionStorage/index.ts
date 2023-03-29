const sessionName = "userSession";

export default class UserSessionStorage {
  static haveUserSession(){
    const data = window.sessionStorage.getItem(sessionName);
    if(!data){
      return ""
    }
    const value = JSON.parse(data);
    if(Object.keys(value).length === 0){
      return ""
    }
    return value;
  }
  static checkUserSession(login: string, password: string){
    const data = this.haveUserSession();
    if(data.login === login && data.password === password){
      return { success: true, login };
    } else {
      return { success: false };
    }
  }
  static writeUserSession(login: string, password: string){
    window.sessionStorage.setItem(sessionName, JSON.stringify({ email: login, password }));
  }
}
