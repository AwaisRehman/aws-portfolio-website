import React from "react";
import { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent"
import PowerButton from "../subComponents/PowerButton"
import SocialIcons from "../subComponents/SocialIcons"
import ParticleAboutPage from "../subComponents/ParticleAboutPage";
import astronaut from "../assets/Images/spaceman.png";
import BigTitle from "../subComponents/BigTitle"

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
text-decoration: none;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;

img{
    width: 100%;
    height: auto;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text}; 
background-color: ${props => props.theme.body};
padding: 2rem;
width: 50vw;
height:  60vh;
z-index: 3;
inline-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family:  'Ubuntu Mono', monospace;
font-style: italic;

`
const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleAboutPage />
                 <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                 </Spaceman>
                 <Main>I'm a full-stack software engineer located in Kingdom of Saudi Arabia (KSA). I love to create simple yet beautiful web and mobile applications with great user experience.
<br /> <br />
I'm interested in the whole front and back-end stack. Most of my experience has been in e-commerce and retail, but I also have some SaaS experience. I'm passionate about creating long-term value for the customer, especially in the FinTech Industry.
<br /> <br />
I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
       <br /> <br/>
                 </Main>
           </Box>
           <BigTitle text="ABOUT" top="10%" left="5%" />
        </ThemeProvider>
    )
}

export default AboutPage