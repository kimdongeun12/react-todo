import React from 'react';
import styled from "styled-components";

function styleButton({btnType, buttonText , clickEvent}) {
    return <BtnIcon type={btnType} onClick={clickEvent}>{buttonText}</BtnIcon>;
}

const BtnIcon = styled.button`
    display: inline-block;
    padding: 4px 8px;
    min-width : 48px;
    border: 1px solid #dddddd;
    & + button { margin-left: 4px; }
`


export default styleButton;