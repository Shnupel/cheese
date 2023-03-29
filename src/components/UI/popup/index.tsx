import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IProps {
  children: ReactNode
}

const UIPopUp: React.FC<IProps> = ({ children }) => {
  return (
    <div className={ styles.model }>
      {/*<div className={ styles.close }>*/}
      {/*  <span className={ styles.top }></span>*/}
      {/*  <span className={ styles.middle }></span>*/}
      {/*  <span className={ styles.bottom }></span>*/}
      {/*</div>*/}
      <div className={ styles.content }>
        { children }
      </div>
      <div className={ styles.blackBanner }></div>
    </div>
  )
}

export default UIPopUp;
