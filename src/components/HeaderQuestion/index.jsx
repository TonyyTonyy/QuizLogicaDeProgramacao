import React from 'react';
import style from './style.module.css';
import LogoUnex from "../../assets/unex.png";

const HeaderQuestion = (props) => {
  return (
    <div className={style.mainContainer}>
      <div className={style.QuestionContainer}>
        {props.question && <h1>{props.question}</h1>}
        {props.pontuacao && <h2 className={style.pontuacao}>{props.pontuacao}</h2>}
        {props.integrantes && (
          <div className={style.IntegrantesContainer}>
            <img src={LogoUnex} alt="Imagem da Unex" width={200} height={50} className={style.imagem} />
            <div className={style.TextoIntegrante}>
              <p>Integrantes:</p>
              {props.integrantes.map((integrante, index) => (
                <p key={index}>{integrante}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderQuestion;
