import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;

  height: 100px;

  background: var(--background);

  border: 1px solid var(--blue);
  border-radius: 15px;

  & + div {
    margin-top: 12px;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const ContentRight = styled.div`
  display: flex;
  flex: 0.5;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.p`
  height: 20px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: var(--blue);
`;

export const ContainerSubtitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const Subtitle = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--blue);
`;

export const Chip = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 16px;
  border-radius: 9px;
  background: var(--orange);
  margin-left: 12px;
`;

export const ChipText = styled.p`
  color: #ffffff;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
`;

export const ResumeValue = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: var(--orange);
`;
