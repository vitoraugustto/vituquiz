import React from 'react';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';

function QuestionWidget({ question, totalQuestions, questionIndex }) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          Pergunta
          1
          de
          {` ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img 
      alt="Descrição"
      style={{
        width: '100%',
        height: '150px',
        objectFit: 'cover',
      }}
      src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <form>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternativeId__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input 
                  // style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  />
                  {alternative}
              </Widget.Topic>
            );
          })}

          <Button>
            Confirmar
          </Button>
        </form>

      </Widget.Content>
    </Widget>
  );
};

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...!
      </Widget.Header>
      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
};

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
};


export default function QuizPage() {
  const screenState = screenStates.QUIZ;
  const totalQuestions = db.questions.length;
  const questionIndex = 0;
  const question = db.questions[questionIndex];

  return (

    <QuizBackground backgroundImage={db.bg} >
      <QuizContainer>
        <QuizLogo />


        {screenState === screenStates.QUIZ && 
          <QuestionWidget 
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            question={question}
          />
        }

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <div>Você acertou X questões, congrats!</div>}

      </QuizContainer>
    </QuizBackground>

  );
};