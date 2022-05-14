import api from '../../service/api';
import { OffersTypes } from './payment.types';

export const getOffersService = () => api.get<OffersTypes[]>('/offer');
