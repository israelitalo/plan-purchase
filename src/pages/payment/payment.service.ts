import api from '../../service/api';
import { OffersTypes, SavePaymentRequestTypes, SavePaymentResponseTypes } from './payment.types';

export const getOffersService = () => api.get<OffersTypes[]>('/offer');

export const savePaymentService = (params: SavePaymentRequestTypes) =>
  api.post<SavePaymentResponseTypes>('/subscription', params);
