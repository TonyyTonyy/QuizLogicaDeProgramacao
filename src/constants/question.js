var data = [
  {
    pergunta:
      "Dado o conjunto A e B, temos que A U B = {1, 2, 4, 6,8, 10, 12, 14, 16}, que A - B = {1, 2, 10}, e que A ∩ B = {6, 8, 16}, assim, o conjunto B é igual a:",
    alternativas: {
      A: "{1, 2, 6, 8, 10, 16}",
      B: "{1, 2, 10, 16}",
      C: "{6, 8, 12, 14, 16}",
      D: "{12, 4, 8, 10, 12, 14}",
      E: "{4, 6, 8, 12, 14, 16}"
    },
    respostaCorreta: "B",
    explicacao:  "Dado A U B = {1, 2, 4, 6, 8, 10, 12, 14, 16}\n\n A - B = {1, 2, 10} e A ∩ B = {6, 8, 16}\n\n Queremos determinar B: \n\nRemovendo os elementos de A que estão em B:\n \n({6, 8, 16})\n\n De todos os elementos de B\n Obtemos B = {1, 2, 10, 16}. \n\nPortanto, a resposta correta é B.",
  },
  {
    pergunta:
      "Se A = {1, 2, 3, 4, 5} e B = {3, 4, 5, 6, 7}, qual é o conjunto A ∩ B?",
    alternativas: {
      A: "{1, 2, 3, 4, 5, 6, 7}",
      B: "{3, 4, 5}",
      C: "{1, 2, 6, 7}",
      D: "{4, 5}",
      E: "{3, 6}",
    },
    respostaCorreta: "B",
    explicacao: "A representa o conjunto dos elementos \n{1, 2, 3, 4, 5}.\n\nB representa o conjunto dos elementos \n{3, 4, 5, 6, 7}.\n\nA interseção de A e B (A∩B) consiste nos elementos que estão presentes em ambos os conjuntos.\n\n Neste caso, os elementos comuns a A e B são {3, 4, 5}.\n\nPortanto, a resposta correta é a opção B: A∩B = {3, 4, 5}."
  },
  {
    pergunta:
      "Se A ∩ B = {} (conjunto vazio), qual é a relação entre os conjuntos A e B?",
    alternativas: {
      A: "A é um subconjunto de B",
      B: "B é um subconjunto de A",
      C: "A é igual a B",
      D: "A e B são conjuntos disjuntos",
      E: "A é o complemento de B",
    },
    respostaCorreta: "D",
    explicacao: "Se A∩B é um conjunto vazio ({}), significa que não há nenhum elemento em comum entre A e B.\n\nQuando A∩B = {}, dizemos que A e B são conjuntos disjuntos.\n\n A resposta correta é a opção D."
  },
  {
    pergunta: "Se A ∩ B = A, o que podemos concluir sobre os conjuntos A e B?",
    alternativas: {
      A: "A é um subconjunto de B",
      B: "B é um subconjunto de A",
      C: "A e B são conjuntos iguais",
      D: "A e B são conjuntos disjuntos",
      E: "A é o complemento de B",
    },
    respostaCorreta: "B",
    explicacao: "A∩B representa a interseção (elementos que tem nos dois).\n\nSe A∩B = A, isso significa que todos os elementos que estão em A também estão em B.  \n\n B é um subconjunto de A.\n\nA resposta correta é a opção B."
  },
  {
    pergunta:
      "Seja A um conjunto com os números primos de 1 a 10 (A = {2, 3, 5, 7}) e B um conjunto com os números pares de 1 a 10 (B = {2, 4, 6, 8, 10}). Qual é o conjunto resultante da interseção entre A e B?",
    alternativas: {
      A: "{2, 3, 5, 7}",
      B: "{2, 4, 6, 8, 10}",
      C: "{2}",
      D: "{3, 5, 7}",
      E: "{}",
    },
    respostaCorreta: "C",
    explicacao: "A é o conjunto dos números primos de 1 a 10, então, os números que têm apenas dois divisores: 1 e o próprio número.\n\nA = {2, 3, 5, 7}.\n\nB é o conjunto dos números pares de 1 a 10, ou seja, aqueles que são divisíveis por 2. Assim, \n\nB = {2, 4, 6, 8, 10}.\n\nO único número que está presente em ambos A e B é o número 2.\n\nNeste caso a resposta correta é a opção C."

  },
];

export default data;
