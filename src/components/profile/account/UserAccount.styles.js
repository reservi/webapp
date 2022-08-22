import styled from "styled-components";

export const Form = styled.form`
    margin: 0 auto;
    margin-top: 100px;
    height: 90vh;
    width: 90%;
    text-align: left;
`

export const UserFullName = styled.h2`
    margin: 0;
`

export const Wrapper = styled.div`
    .tmp {
        display: table;
        margin-right: auto;
        margin-left: auto;
    }
    .avatar{
        overflow: hidden;
    }
    span{
        display: block;
    }

    label{
        display: block;
        position: relative;
        top: -13px;
        left: 15px;
        border-radius: 5px;
        border: 3px solid rgba(1, 1, 1, 0.2);;
        width: 7.2em;
        height: 1em;
        justify-content: center;
        line-height: 1em;
        padding: 0;
        background-color: white;
    }

`;

export const Input = styled.input`
    display: block;
    background-color: white;
    border: 3px solid rgba(1, 1, 1, 0.4);
    width: 9em;
    height: 1.3em;
    padding-left: 0.3em;
    font-size: 2em;
    border-radius: 5px;
    :hover {
        border-color: lightblue;
        /* background-color: lightblue; */
    }
    :disabled{
        background-color: lightgray;
        color: gray;
        :hover {
            border: 3px solid rgba(1, 1, 1, 0.6);
        }
    }

`