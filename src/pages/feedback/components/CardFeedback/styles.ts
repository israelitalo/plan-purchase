import styled from 'styled-components';

export const Container = styled.section`
  width: 343px;
  height: 200px;
  background: var(--white);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 15px 16px;
  margin-top: 57px;
  margin-bottom: 88px;
`;

export const CardBoard = styled.div`
  width: 100%;
  height: 80px;
  background: var(--gray-100);
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 16px 20px;
`;

export const BoardLeft = styled.div`
  display: flex;
  height: 100%;
`;

export const BoardRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
`;

export const Title = styled.p`
  height: 20px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
  color: var(--black);
`;

export const Subtitle = styled.p`
  height: 18px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--black);
`;

export const ContainerDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  & + div {
    padding: 0px 20px;
  }
`;

export const LabelLeft = styled.p`
  height: 18px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--gray-500);
`;

export const LabelRight = styled.p`
  height: 18px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--black);
`;

export const Divider = styled.span`
  margin: 0px 5px;
`;
