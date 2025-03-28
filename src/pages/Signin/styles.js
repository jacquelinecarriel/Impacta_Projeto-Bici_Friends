import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
    background-color: #b3ffff;
`;

export const Content = styled.div`
    gap: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    widht: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: #cce0ff;
    max-width: 350px;
    padding: 20px;
    border-radius: 5px;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: #000080;
`;

export const LabelSignin = styled.label`
    font-size: 16px;
    color: #676767;
`;

export const labelError = styled.label`
    font-sized: 14px;
    color: #000080;
`;

export const Strong = styled.strong`
    cursor: pointer;
    
    a{
        text-decoration: none;
        color: #000080;
    }
`;