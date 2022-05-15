import { parseCookies, setCookie } from 'nookies';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { PAYMENT_COOKIE_KEY } from '../constants/cookies';

import { OffersTypes, SavePaymentResponseTypes } from '../pages/payment/payment.types';

export interface PaymentContextTypes extends SavePaymentResponseTypes {
  offer: OffersTypes | undefined;
  selectedInstallments: number;
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
    setCookie(undefined, PAYMENT_COOKIE_KEY, JSON.stringify(params), {
      maxAge: 60 * 60 * 24 * 1, // 1 day
      path: '/',
    });
    setPaymentDetail(params);
  };

  useEffect(() => {
    const { [PAYMENT_COOKIE_KEY]: paymentCookies } = parseCookies();
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
