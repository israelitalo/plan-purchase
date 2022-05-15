import { NextPage } from 'next';
import Image from 'next/image';
import Router from 'next/router';
import React from 'react';

import SuccessImg from '../../assets/images/success_icon.svg';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import { usePaymentConstext } from '../../contexts/PaymentContext';
import CardFeedback from './components/CardFeedback';
import { Assignature, Container, Content } from './styles';

const Feedback: NextPage = () => {
  const { paymentDetail } = usePaymentConstext();

  const handleGoBack = () => Router.back();

  return (
    <>
      <Header hasGoBack />
      <Container>
        <Content>
          {!paymentDetail && (
            <Title
              title={`Erro ao tentar confirmar pagamento.\nTente novamente!`}
              mb={11}
              mt={18}
            />
          )}
          {paymentDetail && (
            <>
              <Image src={SuccessImg} />
              <Title title="Parabéns!" mb={11} mt={18} />
              <Subtitle
                center
                type="hightLight"
                title="Sua assinatura foi realizada com sucesso."
              />
              <CardFeedback paymentDetail={paymentDetail} />
              <Assignature>Gerenciar assinatura</Assignature>
              <Button title="IR PARA A HOME" onClick={handleGoBack} />
            </>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Feedback;
