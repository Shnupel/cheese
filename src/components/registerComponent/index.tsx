import React, { ChangeEvent, useReducer, useState, Reducer } from "react";
import styles from "./styles.module.scss";
import UserRegistration from "../../controllers/registration";
import UIPopUp from "../UI/popup";
import { useNavigate } from "react-router-dom";

type IState = {
  email: string,
  password: string,
  passwordAgain: string,
}

type ActionTypes = "email" | "password" | "passwordAgain"

type IAction = {
  type: ActionTypes,
  payload: string
}

const initialState: IState = {
  email: "",
  password: "",
  passwordAgain: ""
}

function reducer(state: any, action: IAction): IState{
  switch(action.type){
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "passwordAgain":
      return { ...state, passwordAgain: action.payload }
    default:
      return initialState;
  }
}

const RegisterComponent: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isMatch, setIsMatch] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => dispatch({ type: "email", payload: event.target.value });
  const changePassword = (event: ChangeEvent<HTMLInputElement>) => dispatch({ type: "password", payload: event.target.value });
  const changePasswordAgain = (event: ChangeEvent<HTMLInputElement>) => dispatch({ type: "passwordAgain", payload: event.target.value });

  const handleRegisterBtn = () => {
    if(state.password === state.passwordAgain && state.email !== ""){
      setIsMatch(true);
      UserRegistration(state.email, state.password)
        .then(data => {
          if(data!.error) setIsSuccess(true);
        })
      navigate("/");
    }else{
      setIsMatch(false);
    }
  }

  return (
    <div className={ styles.content }>
      <h1>Зарегистрироваться</h1>
      <div className={ styles.inputs }>
        <input type="text" placeholder="email" onChange={ (event) => changeEmail(event) } />
        <input type="password" placeholder="password" onChange={ (event) => changePassword(event) }/>
        <input type="password" placeholder="password again" onChange={ (event) => changePasswordAgain(event) } />
        { !isMatch && <p>пароли не совпадают</p> }
        <button className={ styles.button } onClick={ () => handleRegisterBtn() }>Зарегестрироваться</button>
      </div>
    </div>
  )
}

const HOCRegister = () => <UIPopUp> <RegisterComponent /> </UIPopUp>

export default  HOCRegister;
