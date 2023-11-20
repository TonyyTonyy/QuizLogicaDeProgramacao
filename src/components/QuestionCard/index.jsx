import React from "react";
import style from "./style.module.css";
const QuestionCard = (props) => {

  return (
    <>
      <div
        key={props.key}
        onClick={props.onClick}
        className={`${style.mainContainer}`}
        style={{ backgroundColor: props.color }}
      >
        <div className={style.circle}>
          <p>{props.alternativa}</p>
        </div>
        <div className={style.resposta}>
          <p>{props.resposta}</p>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
