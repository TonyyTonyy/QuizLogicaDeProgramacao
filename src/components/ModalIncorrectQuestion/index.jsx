import React from 'react'
import style from './style.module.css'

const ModalIncorrectQuestion = (props) => {
  return (
    <div className={style.modalContainer}>
      <div className={style.modalContent}>
        <h3 className={style.text}>{props.explicacao}</h3>
        <div className={style.buttonContainer}>
          <button className={style.button} onClick={props.onClick}>
            <span className={style.arrow}>➜</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalIncorrectQuestion