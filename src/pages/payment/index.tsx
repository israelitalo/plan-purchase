import type { NextPage } from 'next';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import CardsIuguImg from '../../assets/images/cards_iugu.svg';
import HelpImg from '../../assets/images/help_icon.svg';
import Button from '../../components/Button';
import Input from '../../components/Inputs/Input';
import Select from '../../components/Inputs/Select';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import { installmentsElements } from '../../constants/paymentForm/installmentsElements';
import {
  cpfMask,
  creditCardNumberMask,
  cvvMask,
  removeNonNumeric,
  validateCreditCardMask,
} from '../../utils/masks';
import Header from '../../components/Header';
import {
  Clip,
  Container,
  ContainerButtonSubmit,
  ContainerCards,
  ContainerCardsPlans,
  ContainerFormPayment,
  Content,
  Form,
  HalfContaier,
  HalfContainerContent,
  AboutInvoice,
} from './styles';
import { OffersTypes, SavePaymentRequestTypes } from './payment.types';
import { getOffersService, savePaymentService } from './payment.service';
import CardOffer from './components/CardOffer';

interface IFormInputs {
  creditCardNumber: string;
  creditCardExpirationDate: string;
  creditCardCVV: string;
  creditCardHolder: string;
  creditCardCPF: string;
  couponCode?: string;
  installments: string;
}

const schema = yup
  .object({
    creditCardNumber: yup
      .string()
      .required('Campo obrigatório')
      .min(16, 'Cartão deve conter 16 caracteres'),
    creditCardExpirationDate: yup
      .string()
      .required('Campo obrigatório')
      .min(5, 'Validate deve conter 4 caracteres'),
    creditCardCVV: yup
      .string()
      .required('Campo obrigatório')
      .min(3, ' CVV deve conter 3 caracteres'),
    creditCardHolder: yup.string().required('Campo obrigatório'),
    creditCardCPF: yup
      .string()
      .required('Campo obrigatório')
      .min(11, 'CPF deve conter 11 caracteres'),
    couponCode: yup.string().optional(),
    installments: yup.string().required('Campo obrigatório'),
  })
  .required();

const Home: NextPage = () => {
  const [offers, setOffers] = useState<OffersTypes[]>([]);
  const [loadingOffers, setLoadingOffers] = useState<boolean>(false);
  const [offerId, setOfferId] = useState<string>('');
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  const { control, handleSubmit } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const submitForm = (data: IFormInputs) => {
    const params: SavePaymentRequestTypes = {
      couponCode: data.couponCode || null,
      creditCardCPF: data.creditCardCPF,
      creditCardCVV: data.creditCardCVV,
      creditCardExpirationDate: data.creditCardExpirationDate,
      creditCardHolder: data.creditCardHolder,
      creditCardNumber: data.creditCardNumber,
      gateway: 'iugu',
      installments: Number(data.installments),
      offerId: Number(offerId),
      userId: 1,
    };

    setLoadingSubmit(true);

    savePaymentService(params)
      .then(() => alert('Pagamento realizado com sucesso!'))
      .finally(() => setLoadingSubmit(false));
  };

  const getOffers = () => {
    setLoadingOffers(true);
    getOffersService()
      .then((response) => {
        setOffers(response.data);
        if (response.data.length > 0) {
          setOfferId(String(response.data[0].id));
        }
      })
      .finally(() => setLoadingOffers(false));
  };

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <ContainerFormPayment>
            <Title title="Estamos quase lá!" mb={6} />
            <Subtitle type="bold" title="Insira seus dados de pagamento abaixo:" />
            <ContainerCards>
              <Image src={CardsIuguImg} />
            </ContainerCards>
            <Form id="formPayment" onSubmit={handleSubmit(submitForm)}>
              <Controller
                name="creditCardNumber"
                control={control}
                defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <Input
                    label="Número do Cartão"
                    name={field.name}
                    value={creditCardNumberMask.resolve(field.value)}
                    onChange={({ target }) => field.onChange(removeNonNumeric(target.value))}
                    placeholder="0000 0000 0000 0000"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />

              <HalfContaier>
                <HalfContainerContent>
                  <Controller
                    name="creditCardExpirationDate"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState: { error } }) => (
                      <Input
                        label="Validade"
                        name={field.name}
                        value={validateCreditCardMask.resolve(field.value)}
                        onChange={field.onChange}
                        placeholder="MM/AA"
                        error={Boolean(error)}
                        helperText={error?.message}
                      />
                    )}
                  />
                </HalfContainerContent>
                <HalfContainerContent>
                  <Controller
                    name="creditCardCVV"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState: { error } }) => (
                      <Input
                        label="CVV"
                        name={field.name}
                        value={cvvMask.resolve(field.value)}
                        onChange={field.onChange}
                        placeholder="000"
                        error={Boolean(error)}
                        helperText={error?.message}
                      />
                    )}
                  />
                </HalfContainerContent>
              </HalfContaier>

              <Controller
                name="creditCardHolder"
                control={control}
                defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <Input
                    label="Nome impresso no cartão"
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Seu nome"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />

              <Controller
                name="creditCardCPF"
                control={control}
                defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <Input
                    label="CPF"
                    name={field.name}
                    value={cpfMask.resolve(field.value)}
                    onChange={({ target }) => field.onChange(removeNonNumeric(target.value))}
                    placeholder="000.000.000-00"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />

              <Controller
                name="couponCode"
                control={control}
                defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <Input
                    label="Cupom"
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Insira aqui"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />

              <Controller
                name="installments"
                control={control}
                defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <Select
                    label="Número de parcelas"
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    error={Boolean(error)}
                    helperText={error?.message}
                    items={installmentsElements}
                  />
                )}
              />
            </Form>
          </ContainerFormPayment>
        </Content>
        <Content>
          <ContainerFormPayment>
            {loadingOffers ? (
              <Title title="Buscando planos..." mb={6} />
            ) : (
              <>
                <Title title="Confira o seu plano:" mb={6} />
                <Clip>fulano@cicrano.com.br</Clip>
                <ContainerCardsPlans>
                  {offers.map((offer) => (
                    <CardOffer
                      key={offer.id}
                      offer={offer}
                      offerId={offerId}
                      setOfferId={setOfferId}
                    />
                  ))}
                </ContainerCardsPlans>
                <AboutInvoice>
                  Sobre a cobrança
                  <Image src={HelpImg} />
                </AboutInvoice>
              </>
            )}
          </ContainerFormPayment>
        </Content>
        <ContainerButtonSubmit>
          <Button
            form="formPayment"
            type="submit"
            title="Finalizar pagamento"
            disabled={loadingSubmit}
          />
        </ContainerButtonSubmit>
      </Container>
    </>
  );
};

export default Home;
