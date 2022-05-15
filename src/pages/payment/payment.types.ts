export interface OffersTypes {
  id: number;
  storeId: string;
  title: string;
  description: 'Parcelado' | 'À Vista';
  caption: string;
  fullPrice: number;
  discountAmmount: number;
  discountPercentage: number;
  periodLabel: 'mês' | 'ano';
  period: string;
  discountCouponCode: null;
  order: number;
  priority: number;
  gateway: string;
  splittable: boolean;
  installments: number;
  acceptsCoupon: boolean;
}

export interface SavePaymentRequestTypes {
  couponCode: string | null;
  creditCardCPF: string;
  creditCardCVV: string;
  creditCardExpirationDate: string;
  creditCardHolder: string;
  creditCardNumber: string;
  gateway: string;
  installments: number;
  offerId: number;
  userId: number;
}

export interface SavePaymentResponseTypes extends SavePaymentRequestTypes {
  id: number;
}
