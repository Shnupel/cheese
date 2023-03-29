import React, { ChangeEvent, useReducer, useState } from "react";
import styles from "./styles.module.scss";
import UserAuth from "../../controllers/auth";
import UIPopUp from "../UI/popup";
import { Link, Navigate, useNavigate } from "react-router-dom";

type IState = {
  email: string,
  password: string;
}

type IActionType = "password" | "email";

type IAction = {
  type: IActionType,
  payload: string
}

const initialState: IState = {
  email: "",
  password: ""
}

function reducer(state: any, action: IAction): IState{
  switch(action.type){
    case "password":
      return { ...state, password: action.payload }
    case "email":
      return { ...state, email: action.payload }
    default:
      return state;
  }
}

const LoginComponent: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSuccess, setIsSuccess] = useState(true);
  const navigate = useNavigate();

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => dispatch({ type: "email", payload: event.target.value });
  const changePassword = (event: ChangeEvent<HTMLInputElement>) => dispatch({ type: "password", payload: event.target.value });

  const sendBtn = () => {
    UserAuth(state.email, state.password)
      .then(data => {
        //@ts-ignore
        setIsSuccess(data.result.data.success);
        //@ts-ignore
        if(data.result.data.success){
          navigate("/")
        }
      })
  }
  return (
    <div className={ styles.content }>
      <h1>Войти</h1>
      <div className={ styles.inputs }>
        <input type="text" placeholder="email" onChange={ (event) => changeEmail(event) } />
        <input type="password" placeholder="password" onChange={ (event) => changePassword(event) } />
        <button className={ styles.button } onClick={ () => sendBtn() } >Войти</button>
        { !isSuccess && <span className={ styles.cantAuth }>не удалось войти</span> }
      </div>
      <h3>нет аккаунта? <span> <Link to={ "/register" } className={ styles.registration }>Зарегестрироваться</Link> </span></h3>
    </div>
  )
}

const HOCLogin = () => <UIPopUp> <LoginComponent /> </UIPopUp>

export default  HOCLogin;
