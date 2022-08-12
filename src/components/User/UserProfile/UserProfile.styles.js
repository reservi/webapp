import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto;
    /* margin-top: 10px; */
    width: 93em;
    height: 94.9vh;
    background-color: aliceblue;
    overflow: hidden;
`;

export const Menu = styled.ul`
    all: unset;
    width: 100%;
    display: flex;
    padding-left: 5em;
    justify-content: left;
    float: left;
    list-style-type: none;
    /* margin: 0 auto; */
    width: 100%;
    background-color: black;
    height: 2.5em;
    .activeBar {
        background-color: white;
    }
    li {
        margin-top:15px;
        height: 2em;
        font-weight: 500;
        float: left;
        width: 7em;
        margin: 0;
        cursor: pointer;

        a {
            text-decoration: none;
            display: inline-block;
            height: 100%;
            width: 7em;
            margin: 0;
            margin-top: 5px;
            margin-bottom: -15px;
            text-align: center;
            color: white;
        }
    }
`