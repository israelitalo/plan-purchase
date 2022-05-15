import { NextPage } from 'next';
import Image from 'next/image';
import React, { useEffect } from 'react';

import SuccessImg from '../../assets/images/success_icon.svg';
import Header from '../../components/Header';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import { usePaymentConstext } from '../../contexts/PaymentContext';
import CardFeedback from './components/CardFeedback';
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
            </>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Feedback;
