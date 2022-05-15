import React, { FormEvent } from 'react';
import Radio from '../../../../components/Inputs/Radio';
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
        <Title>Anual | À Vista</Title>
        <ContainerSubtitle>
          <Subtitle>De R$ 514,80 | Por R$ 436,90</Subtitle>
          <Chip>
            <ChipText>-15%</ChipText>
          </Chip>
        </ContainerSubtitle>
        <ResumeValue>10x de R$ 43,69/mês</ResumeValue>
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
