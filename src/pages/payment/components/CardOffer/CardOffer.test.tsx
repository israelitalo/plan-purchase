import { useState } from 'react';

import { render, screen } from '@testing-library/react';

import { OffersTypes } from '../../payment.types';
import CardOffer from './';

const offer = {
  acceptsCoupon: true,
  caption: '7 Dias Grátis',
  description: 'Parcelado',
  discountAmmount: 60,
  discountCouponCode: null,
  discountPercentage: 0.1,
  fullPrice: 600,
  gateway: 'iugu',
  id: 32,
  installments: 12,
  order: 1,
  period: 'annually',
  periodLabel: 'mês',
  priority: 1,
  splittable: true,
  storeId: 'anual_parcelado_iugu',
  title: 'Premium Anual',
} as OffersTypes;

describe('CardOffer application', () => {
  it('Render cardOffer application', () => {
    const Wrapper = () => {
      const [selectedOffer, setSelectedOffer] = useState<OffersTypes | undefined>(undefined);
      return (
        <CardOffer
          offer={offer}
          selectedOffer={selectedOffer}
          setSelectedOffer={setSelectedOffer}
          data-testid="cardOffer-payment"
        />
      );
    };
    render(<Wrapper />);
    expect(screen.getByTestId('cardOffer-payment')).toBeInTheDocument();
    expect(screen.getByTestId('offer-description-payment')).toBeInTheDocument();
    expect(screen.getByTestId('offer-discountPercentage-payment')).toBeInTheDocument();
    if (offer.description === 'Parcelado') {
      expect(screen.getByTestId('offer-description-payment')).toHaveTextContent('Parcelado');
    }
  });
});
