import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #1b1b1b;
    }

    button{
        font-weight: bold;
        font-size: 1.1.rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 2px solid #19a0ee;
        border-radius: .5rem;
        color: white;
        background: transparent;
        outline: none;
        transition: all .3s ease;
        &:hover{
            background-color: #19a0ee;
            color: white;
        }
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }

    h3{
        color: white;
    }

    h4{
        font-weight: bold;
    }

    a{
        font-size: 1.1.rem;
    }

    span{
        font-weight: bold;
        color: #19a0ee; 
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
    }
`;

export default GlobalStyle;
