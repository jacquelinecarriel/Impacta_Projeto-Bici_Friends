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
    left: 10%;
    text-align: center;
`;



export const ContainerText = styled.div`
    font-size: 17px;
    background-color: #fffff;
    width: inline-block;
    border: 15px;
    padding: 50px;
    margin: 10px;
   transform: translate(100%, 5%);

`;

export const ContainerText1 = styled.div`
    font-size: 15px;
    display: table;
    justify-text: justify;
    width: 400px;

`;
export const ContainerText2 = styled.div`
    font-size: 12px;
    padding: 20px;


    .container {
      display: flex;          /* Enables Flexbox */
      align-items: center;    /* Vertically centers items */
      gap: 16px;
      width: 450px;/* Adds space between boxes */
    }

    .box {
      padding: 20px;
      border-radius: 20px;
    }
    .text-box {
      width: 400px;
      flex-grow: 1;
      margin: 15px;
      padding: 30px;/* Takes remaining space */
      background: #f5f5f5;
    }

`;


export const Top = styled.div`
    //left: 100%;
    transform: translate(650%, 5%);
    text-align: center;

    //width: 33.33%;
    //padding: 70px;
`;

export const labelError = styled.label`
    font-sized: 20px;
    color: #2F4F4F;
`;

export const Title = styled.h2``;