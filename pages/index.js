import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import Button from '../src/components/Button';
import Input from '../src/components/Input';


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>VituQuiz!</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The Legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();

              router.push(`/quiz?name=${name}`);
            }}>
            <Input 
            name="nomeDoUsuario"
            onChange={(event) => setName(event.target.value)}
            placeholder="Diga teu nome!" 
            value={name}
            />

            <Button type="submit" disabled={name.length === 0}>
              {`Jogar ${name}`}
            </Button>

            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            
            <p>Lorem ipsum dolor sit amet.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/vitoraugustto"/>
    </QuizBackground>
  );
};
