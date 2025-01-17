import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:before,
    *:after {
        box-sizing: border-box;
    }
    
    button
    {
        cursor: pointer;
        outline: none;
    }

    ul li {
        list-style: none;
    }

    html,
    body {
        width: 100%;
        height: 100%;      
        font-family: "Montserrat", sans-serif;
        background-color: #252746;       
    }     
    
    a,
    input,
    button
     {
        font-family: "Montserrat", sans-serif;  
        font-weight: 500;
    }  
`;
