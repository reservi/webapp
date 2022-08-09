import styled from "styled-components"

export const Wrapper = styled.div`
    opacity:0.8;
    background-color: black;
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    z-index:1000;
`;

export const Forms = styled.form`
    background-color: white;
    width: 20em;
    height: 25em;
    transform: translate(-50%, -50%);
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    overflow: unset;
`;

export const Header = styled.h3`
    margin-top: 1.5em;
    height: 2em;
    width: 100%;
    text-align: center;
`

export const TextInput = styled.input`
    all: unset;
    border: 1px solid black;
    padding: 2px;
    padding-left: 5px;
    width: 90%;
    height: 2em;
    margin: 0 auto;
    transform: translate(4%, 0);
    font-size: 1.1em;
    margin-bottom: 20px;
    border-radius: 4px;
`