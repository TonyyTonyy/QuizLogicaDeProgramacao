import "./App.css";
import data from "./constants/question";
import { useState } from "react";
import HeaderQuestion from "./components/HeaderQuestion";
import ButtonPlay from "./components/ButtonPlay";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [question, setQuestion] = useState(-1);
  const [pontos, setPontos] = useState(0);

  if (question < 0) {
    return (
      <div className="container">
        <HeaderQuestion />
        <ButtonPlay onClick={() => setQuestion(0)} />
      </div>
    );
  } else if (data.length > question) {
    return (
      <div className="container">
        <HeaderQuestion question={data[question].pergunta} />
        {Object.entries(data[question].alternativas).map((altern) => {
          return (
            <div>
              <QuestionCard
                alternativa={altern[0]}
                resposta={altern[1]}
                onClick={() => {
                  if (altern[0] === data[question].respostaCorreta) {
                    setPontos(pontos + 1);
                  }
                  setQuestion(question + 1);
                }}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="container">
        <HeaderQuestion question={`Pontuação: ${pontos}/5`} />
        <ButtonPlay
          onClick={() => {
            setQuestion(0);
            setPontos(0);
          }}
        />
      </div>
    );
  }
}

export default App;
