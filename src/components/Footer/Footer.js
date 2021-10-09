import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
    <LinkList>
      <LinkColumn>
        <LinkTitle>Click to Call</LinkTitle>
        <LinkItem href="tel:615-430-3114">CALL OR TEXT</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>click to EMAIL</LinkTitle>
        <LinkItem href="mailto:zpuckettdesign@gmail.com">
        ZPUCKETT
        </LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>FIND ME ON SOCIAL</Slogan>
      </CompanyContainer>
      <SocialContainer>
        <SocialIcons href="https://github.com/zpuckettdesign">
          <AiFillGithub size="4rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/zach-puckett1/">
          <AiFillLinkedin size="4rem" />
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
