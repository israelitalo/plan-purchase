import Image from 'next/image';
import React from 'react';
import LogoImg from '../../assets/images/logo.svg';
import BackImg from '../../assets/images/back_button_icon.svg';
import { Container, ContainerBackButton } from './styles';
import Router from 'next/router';

interface HeaderProps {
  hasGoBack?: boolean;
}

const Header = ({ hasGoBack, ...rest }: HeaderProps) => {
  return (
    <Container {...rest}>
      {hasGoBack && (
        <ContainerBackButton onClick={() => Router.back()} data-testid="header-button">
          <Image src={BackImg} />
        </ContainerBackButton>
      )}
      <Image src={LogoImg} />
    </Container>
  );
};

export default Header;
