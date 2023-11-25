import "./App.css";
import data from "./constants/question";
import { useState } from "react";
import HeaderQuestion from "./components/HeaderQuestion";
import ButtonPlay from "./components/ButtonPlay";
import QuestionCard from "./components/QuestionCard";
import ModalIncorrectQuestion from "./components/ModalIncorrectQuestion";

function App() {
  const [question, setQuestion] = useState(-1);
  const [pontos, setPontos] = useState(0);
  const [color, setColor] = useState(["", "", "", "", ""]);
  const [showModal, setShowModal] = useState(false);

  if (question < 0) {
    return (
      <div className="container">
        <HeaderQuestion
          integrantes={[
            "Tony Cleriston",
            "Gabriel Torres",
            "Vinicius Cerqueira",
          ]}
        />
        <ButtonPlay onClick={() => setQuestion(0)} />
      </div>
    );
  } else if (data.length > question) {
    return (
      <div className="container">
        <HeaderQuestion question={data[question].pergunta} key={data[question].pergunta}/>
        {Object.entries(data[question].alternativas).map((altern, index) => {
          return (
            <div key={altern[0]}>
              <QuestionCard
                alternativa={altern[0]}
                resposta={altern[1]}
                color={color[index]}
                onClick={async () => {
                  if (altern[0] === data[question].respostaCorreta) {
                    setColor(
                      color.map((_, i) => (i === index ? "rgb(12 208 43)" : ""))
                    );
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    setColor(color.map((_) => ""));
                    setPontos(pontos + 1);
                    setQuestion(question + 1);
                  } else {
                    setColor(
                      color.map((_, i) => {
                        if (i === index) {
                          return "red";
                        } else if (
                          data[question].respostaCorreta ===
                          Object.entries(data[question].alternativas)[i][0]
                        ) {
                          return "rgb(12 208 43)";
                        }
                        return "";
                      })
                    );
                    setShowModal(true);
                  }
                }}
              />
              {showModal && (
                <ModalIncorrectQuestion
                  keyModal={data[question].explicacao}
                  explicacao={data[question].explicacao}
                  onClick={() => {
                    setQuestion(question + 1);
                    setShowModal(false);
                    setColor(color.map((_) => ""));
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="container">
        <HeaderQuestion pontuacao={`Pontuação: ${pontos}/5`} />
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
