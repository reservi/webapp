import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    z-index:1000;
`;

export const ErrorMsg = styled.h4`
    text-align: center;
    color: red;
    margin-top: 0;
    margin-bottom: 0.1em;
`;

export const Forms = styled.form`
    background-color: white;
    width: 20em;
    height: 30em;
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
    margin-bottom: 0;
`

export const TextInput = styled.input`
    all: unset;
    border: 1px solid black;
    padding: 2px;
    padding-left: 5px;
    width: 90%;
    height: 2em;
    transform: translate(4%, 0);
    font-size: 1.1em;
    margin-bottom: 10px;
    border-radius: 4px;

    :last-of-type{
        margin-bottom: 0;
    }
`

export const CloseButton = styled.div`
    all: unset;
    width: 0.5em;
    height: 0.5em;
    /* margin: 20px 20px 20px 20px; */
    cursor: pointer;
    display: block;
    position: relative;
    left: 92%;
    top: 3%;
    transform: translate(-50%, -50%);
    font-size: 2em;
`;

export const Text = styled.p`
    transform: translate(4%, 0);
    margin: 0;
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 1.3em;
`;

export const Line = styled.hr`
    width: 95%;
    margin-top: 5px;
    margin-bottom: 10px;
    height: 3px;
    background-color: gray;
    opacity: 0.3;
    border-radius: 2px;
`;

export const LoginButton = styled.input`
    all: unset;
    width: 95%;
    height: 2.5em;
    background-color: #2196F3;
    margin: 0 auto;
    transform: translate(2.5%, 0);
    font-size: 1.5em;
    text-align: center;
    color: white;
    cursor: pointer;
`;