import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const ContainerFormPayment = styled.div`
  width: 100%;
  max-width: 330px;
  display: flex;
  flex-direction: column;
`;

export const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 35.11px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const HalfContaier = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const HalfContainerContent = styled.div`
  display: flex;
  flex: 1;
  & + div {
    margin-left: 50px;
  }
`;

export const ContainerButtonSubmit = styled.div`
  width: 330px;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 64px;
`;

export const Clip = styled.div`
  height: 24px;
  border: 1px solid var(--gray-100);
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 4px 12px;
  color: var(--black);
  width: max-content;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

export const ContainerCardsPlans = styled.div`
  margin-top: 30px;
`;

export const AboutInvoice = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  margin-top: 30px;
  color: var(--black);
  gap: 13px;
`;
