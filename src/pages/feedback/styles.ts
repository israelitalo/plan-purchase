import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 343px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Assignature = styled.p`
  height: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.05em;
  margin-bottom: 24px;
  color: var(--blue);
`;
