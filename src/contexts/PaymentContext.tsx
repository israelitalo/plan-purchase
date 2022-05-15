import { parseCookies, setCookie } from 'nookies';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { OffersTypes, SavePaymentResponseTypes } from '../pages/payment/payment.types';

export interface PaymentContextTypes extends SavePaymentResponseTypes {
  offer: OffersTypes | undefined;
}

interface PaymentContextData {
  paymentDetail: PaymentContextTypes | null;
  setPaymentData: (paymentDetail: PaymentContextTypes) => void;
}

interface PaymentProviderTypes {
  children: ReactNode;
}

const PaymentContext = createContext({} as PaymentContextData);

export const PaymentProvider = ({ children }: PaymentProviderTypes) => {
  const [paymentDetail, setPaymentDetail] = useState<PaymentContextTypes | null>(null);

  const setPaymentData = (params: PaymentContextTypes) => {
    setCookie(undefined, 'pebmed.payment', JSON.stringify(params), {
      maxAge: 60 * 60 * 24 * 1, // 1 days
      path: '/',
    });
    setPaymentDetail(params);
  };

  useEffect(() => {
    const { 'pebmed.payment': paymentCookies } = parseCookies();
    if (paymentCookies) {
      setPaymentDetail(JSON.parse(paymentCookies));
    }
  }, []);

  return (
    <PaymentContext.Provider value={{ setPaymentData, paymentDetail }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentConstext = () => {
  return useContext(PaymentContext);
};
