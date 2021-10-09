import React from 'react';
import { DiReact, DiBootstrap, DiCss3, DiJsBadge, DiMysql, DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { SiNextdotjs, SiAdobe } from "react-icons/si";
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle, SocialIcons } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
        </ListContainer>
        <SocialIcons href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        <DiReact size="5rem" /> React
      </SocialIcons>
      <SocialIcons href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
        <SiNextdotjs size="5rem" /> Next.js
      </SocialIcons>
      <SocialIcons href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
        <DiJsBadge size="5rem" /> JavaScript
      </SocialIcons>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <SocialIcons href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
        <DiNodejsSmall size="5rem" /> Node.js
      </SocialIcons>
      <SocialIcons href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
        <DiMysql size="5rem" /> MySQL
      </SocialIcons>
      <SocialIcons href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
        <DiMongodb size="5rem" /> Mongo DB
      </SocialIcons>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <SocialIcons href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
        <DiBootstrap size="5rem" /> Bootstrap
      </SocialIcons>
      <SocialIcons href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
        <DiCss3 size="5rem" /> CSS
      </SocialIcons>
      <SocialIcons href="https://www.adobe.com/" target="_blank" rel="noopener noreferrer" >
        <SiAdobe size="5rem" /> Adobe Creative Suite
      </SocialIcons>
        </ListContainer>
      </ListItem>
    </List>
  </Section>

);

export default Technologies;
