import React from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import styled from "styled-components";
import { Develope } from '../components/AllSvgs'
import LogoComponent from "../subComponents/LogoComponent"
import PowerButton from "../subComponents/PowerButton"
import SocialIcons from "../subComponents/SocialIcons"
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle"

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
text-decoration: none;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text}; 
background-color: ${props => props.theme.body};
paddinh: 2rem;
width: 30vw;
height:  60vh;
z-index: 3;
inline-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}

`

const Title = styled.h2`

display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
   &>*{
    fill:${props => props.theme.body};
   }
}

&>*:first-child{
    margin-right: 1rem;
   }
`

const Description = styled.div`
color: ${props => props.theme.text}; 
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
margin-left: 0.5rem;

${Main}:hover &{
   
     color:${props => props.theme.body};
    
 }

strong{
    margin-bottom: 3rem;
    text-transform: uppercase;

}
ul,p{
    margin-left: 1.5rem;
}
`

const MySkillsPage = () => {
    return (

        <ThemeProvider theme={LightTheme}>
            <Box>
                <LogoComponent theme='light'/>
                <SocialIcons theme='light' />
                <PowerButton />
                
                 <ParticleComponent />
                 <Main>
                     <Title>
                        <Develope  width={40} height={40} />Frontend Developer
                     </Title>
                     <Description>
                     I value business or brand for which I'm creating, thus I enjoy bringing new ideas to life.
                     </Description>
                     <Description>
                        <strong>I like to Design</strong>
                     <ul>
                        <li>
                            Web & Mobile Apps
                        </li>
                        
                     </ul>
                     <strong>SKILLS</strong>
                     <p>Bootstrap,ReactJS,Redux,Ant</p>
                     <p>Typescript,Angular,Flutter etc..</p>
                     </Description>
                     <Description>
                        <strong>Tools</strong>
                     <ul>
                        <li>
                            VSCode, Flutlab, Genymotion, GitHub
                        </li>          
                     </ul>
                     </Description>
                 </Main>
                 <Main>

                 <Title>
                    <Develope width={40} height={40} />Backend Developer
                 </Title>
                 <Description>
                  Develop web services and APIs.
                 </Description>
                 <Description>
                        <strong>SKILLS</strong>
                        <p>Nodejs,Expressjs,.NET Core, MongoDB,SQL etc..</p>
                     </Description>
                     <Description>
                        <strong>Tools</strong>
                     <ul>
                        <li>
                            VSCode, Git, SQL Server, Azure, Firebase
                        </li>          
                     </ul>
                     </Description>
                 </Main>
                 <BigTitle text="SKILLS" top="80%" right="30%" />
           </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage