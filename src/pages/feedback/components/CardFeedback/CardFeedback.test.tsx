import { render, screen } from '@testing-library/react';

import { PaymentContextTypes } from '../../../../contexts/PaymentContext';
import { OffersTypes } from '../../../payment/payment.types';
import CardFeedback from './';

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

const paymentDetail = {
  couponCode: null,
  creditCardCPF: '98765432100',
  creditCardCVV: '123',
  creditCardExpirationDate: '10/21',
  creditCardHolder: 'Cássio Scofield',
  creditCardNumber: '5555444433332222',
  gateway: 'iugu',
  id: 1,
  installments: 1,
  offerId: 18,
  userId: 1,
  offer,
  selectedInstallments: 10,
} as PaymentContextTypes;

describe('CardOffer application', () => {
  it('Render cardOffer application', () => {
    const Wrapper = () => {
      return <CardFeedback paymentDetail={paymentDetail} data-testid="cardFeedback" />;
    };
    render(<Wrapper />);
    expect(screen.getByTestId('cardFeedback')).toBeInTheDocument();
    expect(screen.getByTestId('description-feedback')).toBeInTheDocument();
    if (paymentDetail?.offer?.description === 'Parcelado') {
      expect(screen.getByTestId('description-feedback')).toHaveTextContent('Parcelado');
    }
  });
});
