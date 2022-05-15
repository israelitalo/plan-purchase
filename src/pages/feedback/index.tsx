import { NextPage } from 'next';
import React from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { Container, Content } from './styles';

const Feedback: NextPage = () => {
  return (
    <>
      <Header hasGoBack />
      <Container>
        <Content>
          <Title title="Parabéns!" mb={11} />
        </Content>
      </Container>
    </>
  );
};

export default Feedback;
