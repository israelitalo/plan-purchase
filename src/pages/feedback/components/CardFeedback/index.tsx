import React from 'react';
import {
  BoardLeft,
  BoardRight,
  CardBoard,
  Container,
  ContainerDetail,
  Divider,
  LabelLeft,
  LabelRight,
  Subtitle,
  Title,
} from './styles';
import StarsImg from '../../../../assets/images/stars_icon.svg';
import Image from 'next/image';
import { PaymentContextTypes } from '../../../../contexts/PaymentContext';
import { formatCpf } from '../../../../utils/masks';
import { formatCurrency } from '../../../../utils/formatCurrency';

interface CardFeedBackProps {
  paymentDetail: PaymentContextTypes;
}

const CardFeedback = ({ paymentDetail }: CardFeedBackProps) => {
  return (
    <Container>
      <CardBoard>
        <BoardLeft>
          <Image src={StarsImg} />
        </BoardLeft>
        <BoardRight>
          <Title>Anual | {paymentDetail.offer?.description}</Title>
          <Subtitle>
            {`${formatCurrency(
              paymentDetail?.offer?.description === 'Parcelado'
                ? paymentDetail?.offer?.fullPrice * 12 - paymentDetail?.offer?.discountAmmount * 12
                : (paymentDetail?.offer?.fullPrice || 0) -
                    (paymentDetail?.offer?.discountAmmount || 0),
            )}`}
            <Divider>|</Divider>
            {`${paymentDetail?.installments}x
          ${formatCurrency(
            paymentDetail?.offer?.description === 'Parcelado'
              ? (paymentDetail?.offer?.fullPrice * 12 -
                  paymentDetail?.offer?.discountAmmount * 12) /
                  paymentDetail.installments
              : (paymentDetail?.offer?.fullPrice || 0) -
                  (paymentDetail?.offer?.discountAmmount || 0) /
                    (paymentDetail?.offer?.installments || 1),
          )}`}
          </Subtitle>
        </BoardRight>
      </CardBoard>
      <ContainerDetail>
        <LabelLeft>E-mail</LabelLeft>
        <LabelRight>fulano@cicrano.com.br</LabelRight>
      </ContainerDetail>
      <ContainerDetail>
        <LabelLeft>CPF</LabelLeft>
        <LabelRight>{formatCpf(paymentDetail.creditCardCPF)}</LabelRight>
      </ContainerDetail>
    </Container>
  );
};

export default CardFeedback;
