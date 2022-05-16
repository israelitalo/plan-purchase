import Image from 'next/image';
import React from 'react';

import StarsImg from '../../../../assets/images/stars_icon.svg';
import { PaymentContextTypes } from '../../../../contexts/PaymentContext';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { formatCpf } from '../../../../utils/masks';
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

interface CardFeedBackProps {
  paymentDetail: PaymentContextTypes;
}

const CardFeedback = ({ paymentDetail, ...rest }: CardFeedBackProps) => {
  return (
    <Container {...rest}>
      <CardBoard>
        <BoardLeft>
          <Image src={StarsImg} />
        </BoardLeft>
        <BoardRight>
          <Title>
            Anual |
            <span data-testid="description-feedback">{paymentDetail.offer?.description}</span>
          </Title>
          <Subtitle>
            {`${formatCurrency(
              paymentDetail?.offer?.description === 'Parcelado'
                ? paymentDetail?.offer?.fullPrice * 12 - paymentDetail?.offer?.discountAmmount * 12
                : (paymentDetail?.offer?.fullPrice || 0) -
                    (paymentDetail?.offer?.discountAmmount || 0),
            )}`}
            <Divider>|</Divider>
            {`${paymentDetail?.selectedInstallments}x
          ${formatCurrency(
            paymentDetail?.offer?.description === 'Parcelado'
              ? (paymentDetail?.offer?.fullPrice * 12 -
                  paymentDetail?.offer?.discountAmmount * 12) /
                  paymentDetail?.selectedInstallments
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
