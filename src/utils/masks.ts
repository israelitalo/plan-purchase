import IMask from 'imask';

export const removeNonNumeric = (num: string) => {
  return num.replace(/[^\d]+/g, '');
};

export const INPUT_MASKS = {
  CPF: '000.000.000-00',
  CREDIT_CARD_NUMBER: '0000 0000 0000 0000',
  VALIDATE_CREDIT_CARD: '00/00',
  CVV: '000',
};

export const creditCardNumberMask = IMask.createMask({
  mask: INPUT_MASKS.CREDIT_CARD_NUMBER,
});

export const cpfMask = IMask.createMask({
  mask: INPUT_MASKS.CPF,
});

export const validateCreditCardMask = IMask.createMask({
  mask: INPUT_MASKS.VALIDATE_CREDIT_CARD,
});

export const cvvMask = IMask.createMask({
  mask: INPUT_MASKS.CVV,
});

/**
 * Returns the CPF formatted, using this model: `000.000.000-00`.
 * @param cpf - String
 */
export const formatCpf = (cpf: string) => cpfMask.resolve(cpf);
