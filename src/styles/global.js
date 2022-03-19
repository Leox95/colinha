import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, border-style, #root{
    min-height: 100%;
}

body{
    background-color: #8b0000;
    font-size: 14px;
    -webkit-font-smoothig: antialiased !important;
}

border-style, input-security, button{
    color: #222;
    font-size:14px;
    font-family: Arial, Helvetica, sans-serif;
}

button{
    cursor:pointer;
}
`