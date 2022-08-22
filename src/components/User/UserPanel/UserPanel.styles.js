import styled from "styled-components";

export const Wrapper = styled.div`
    all: unset;
    width: 13em;
    margin: 0 auto;
    line-height: 1.5;
    margin-right: 10em;
    color: white;
    background-color: white;
    border-radius: 10px;
    color: black;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    {props => props.visible ?
                "height: 3em;" :
                "height: 30em;"}
`;

export const UserName = styled.div`
    width: 10em;
    height: 3em;
    display: inline-block;
    border-radius: 10px;
    cursor: pointer;
    float: left;
    line-height: 3;
`

export const List = styled.ul`
    all: unset;
    width: 100%;
    justify-content: center;
    list-style-type: none;
    li {
        margin-top:5px;
        height: 2em;
        font-weight: 500;
        cursor: pointer;
    }
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