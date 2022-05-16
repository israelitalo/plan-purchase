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
  selectedOffer: OffersTypes | undefined;
  setSelectedOffer: (offer: OffersTypes) => void;
  offer: OffersTypes;
}

const CardOffer = ({ offer, selectedOffer, setSelectedOffer, ...rest }: CardOfferProps) => {
  return (
    <Container {...rest}>
      <ContentLeft>
        <Title>
          Anual | <span data-testid="offer-description-payment">{offer.description}</span>
        </Title>
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
            <ChipText data-testid="offer-discountPercentage-payment">
              {offer.discountPercentage * 100}%
            </ChipText>
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
          checked={Boolean(Number(selectedOffer?.id) === offer.id)}
          onChange={(_) => setSelectedOffer(offer)}
        />
      </ContentRight>
    </Container>
  );
};

export default CardOffer;
