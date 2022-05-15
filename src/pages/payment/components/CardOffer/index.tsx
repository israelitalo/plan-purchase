import React from 'react';

import Radio from '../../../../components/Inputs/Radio';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { OffersTypes } from '../../payment.types';
import {
  Chip,
  ChipText,
  Container,
  ContainerSubtitle,
  ContentLeft,
  ContentRight,
  ResumeValue,
  Subtitle,
  Title,
} from './styles';

interface CardOfferProps {
  offerId: string;
  setOfferId: (offerId: string) => void;
  offer: OffersTypes;
}

const CardOffer = ({ offer, offerId, setOfferId }: CardOfferProps) => {
  return (
    <Container>
      <ContentLeft>
        <Title>Anual | {offer.description}</Title>
        <ContainerSubtitle>
          <Subtitle>
            {`De ${formatCurrency(
              offer.description === 'Parcelado' ? offer.fullPrice * 12 : offer.fullPrice,
            )} | Por
            ${formatCurrency(
              offer.description === 'Parcelado'
                ? offer.fullPrice * 12 - offer.discountAmmount * 12
                : offer.fullPrice - offer.discountAmmount,
            )}`}
          </Subtitle>
          <Chip>
            <ChipText>{offer.discountPercentage * 100}%</ChipText>
          </Chip>
        </ContainerSubtitle>
        <ResumeValue>
          {`${offer.installments}x de
          ${formatCurrency(
            (offer.description === 'Parcelado'
              ? offer.fullPrice * 12 - offer.discountAmmount * 12
              : offer.fullPrice - offer.discountAmmount) / offer.installments,
          )}/${offer.periodLabel}`}
        </ResumeValue>
      </ContentLeft>
      <ContentRight>
        <Radio
          name={offer.title}
          value={offer.id}
          checked={Boolean(Number(offerId) === offer.id)}
          onChange={(event) => setOfferId(event.target.value)}
        />
      </ContentRight>
    </Container>
  );
};

export default CardOffer;
