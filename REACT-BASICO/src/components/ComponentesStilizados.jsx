import React from "react";
import styled, {css, keyframes, ThemeProvider, createGlobalStyle } from "styled-components";

export default function ComponentesEstilizados(){
    let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

    const setTrasitionTime = (time) => `all ${time} ease-in-out`;

    const fadeln = keyframes`
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    `;

    const light = {
        color:"#222",
        bgColor:"#ddd"
    }

    const dark = {
        color:"#ddd",
        bgColor:"#222"
    }

    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color: ${({theme}) => theme.color};
        background-color: ${({theme}) => theme.bgColor};
    `;

    const MyH3 = styled.h3`
        padding: 2rem;
        text-align: center;
        color: ${(props) => props.color};
        color: ${({color}) => color};
        color: ${({color}) => color || "#000"};
        background-color: ${mainColor};
        transition: ${setTrasitionTime("1s")};
        animation: ${fadeln} 2s ease-out;

        ${({isButton}) => isButton && css`
            margin: auto;
            max-width: 50%;
            border-radius: 0.25rem;
            cursor: pointer;
        `}

        &:hover{
            background-color: ${mainAlphaColor80};
        }
    `;

    const BoxRounded = styled(Box)`
        border-radius: 1rem;
    `;

    const GlobalStyle = createGlobalStyle`
        h2 {
            padding: 2rem;
            background-color: #fff;
            color: #61dafb;
            text-transform: uppercase;
        }
    `; 

    return(
        <>
            <GlobalStyle />
            <h2>Styled-Components</h2>
            <MyH3>Hola soy un 3 estilizado con styled-components</MyH3>
            <MyH3 color="#61dafb">Hola soy un 3 estilizado con styled-components</MyH3>
            <MyH3 isButton>Soy unh3 estilizado como boton</MyH3>
            <ThemeProvider theme={light}>
               <Box> Soy una caja light </Box> 
               <BoxRounded> Soy una caja light </BoxRounded> 
            </ThemeProvider>
            <ThemeProvider theme={dark}>
               <Box> Soy una caja dark </Box> 
               <BoxRounded> Soy una caja dark </BoxRounded> 
            </ThemeProvider>
        </>
    )
}