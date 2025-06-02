import styled from "styled-components";

export const ContainerWhite = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    background-color: #fffff;
`;

export const ContainerBlue = styled.div`
    background-color: #00b8e6;
        position: static;
        left: 10%;
        height: 700px;

`;


export const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    text-align: center;

    .buttons {
          position: absolute;
          top: 50%;
          left: 70%;
        }
`;

export const Img = styled.div`
    float: left;
    width: 33.33%;
    padding: 70px;
`;

export const Top = styled.div`
    //left: 100%;
    transform: translate(650%, 5%);
    text-align: center;

    //width: 33.33%;
    //padding: 70px;
`;


export const Title = styled.h2``;