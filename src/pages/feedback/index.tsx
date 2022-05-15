import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { usePaymentConstext } from '../../contexts/PaymentContext';
import { Container, Content } from './styles';

const Feedback: NextPage = () => {
  const { paymentDetail } = usePaymentConstext();

  useEffect(() => {
    if (paymentDetail) {
      console.log(paymentDetail);
    }
  }, [paymentDetail]);

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
