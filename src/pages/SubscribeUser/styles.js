import styled from "styled-components";

export const ContainerWhite = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    background-color: #FFFFFF;
`;

export const ContainerBlue = styled.div`
    background-color: #00b8e6;
        width: 700px;
        height: 600px;
`;

export const Img = styled.div`
    transform: translate(0%, -50%);
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
      align-items: center;
      background-color: #fffff;
      gap: 16px;
      width: 450px;/* Adds space between boxes */
    }

    .box {
      padding: 10px;
      border-radius: 20px;
      background-color: #fffff;

    }
    .text-box {
      width: 250px;
      flex-grow: 1;
      margin: 10px;
      padding: 10px;/* Takes remaining space */
      background: #f5f5f5;
      color: #404040;
      font-weight: 550;
      font-size: 11px;
    }
    .placeholder {
        font-size: 11px;
        color: #00FFFF;
    }

    .check {
         transform: translate(30%, -50%);

    }
    .error{
        transform: translate(30%, -140%);
     }

`;




export const Top = styled.div`
    transform: translate(800%, 2%);
    text-align: center;

`;

export const labelError = styled.label`
    font-sized: 20px;
    color: #2F4F4F;

`;

export const Title = styled.h2`
    font-size: 20px;
    justify-content: center;
    width: 100%;

`;
