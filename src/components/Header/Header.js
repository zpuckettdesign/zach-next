import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineLaptop } from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "30px", marginLeft:"10px" }}>
           <Span>Zach Puckett</Span>
        </a>
      </Link>
    </Div1>
    <Div2 style={{marginLeft:"80px", marginTop:"10px"}}>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/zpuckettdesign">
        <AiFillGithub size="5rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/zach-puckett1/">
        <AiFillLinkedin size="5rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
