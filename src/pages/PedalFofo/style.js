import styled from "styled-components";

export const ContainerWhite = styled.div`
    display: flex;
    justify-content: center;
    width: 70%;
    background-color: #fffff;
`;

export const ContainerBlue = styled.div`
    background-color: #00b8e6;
    position: absolute;
    height: 100%;
    left: 0px;
    width: 30%;
`;

export const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const Img = styled.div`
    float: left;
    width: 500%;
    padding: 70px;
`;

export const Top = styled.div`
    //left: 100%;
    transform: translate(1200%, 5%);
    text-align: center;

`;
export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: #000080;
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

export const labelError = styled.label`
    font-sized: 20px;
    color: #2F4F4F;
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
//    width: 200px;
//    float: left;
//    transform: translate(50px, 55%);
//    flex-grow: 1;          /* Takes remaining space */
//    background: #f5f5f5;

    .container {
      display: flex;          /* Enables Flexbox */
      align-items: center;    /* Vertically centers items */
      gap: 16px;             /* Adds space between boxes */
    }

    .box {
      padding: 20px;
      border: 1px solid #ddd; /* Optional border */
      border-radius: 4px;     /* Optional rounded corners */
    }
    .text-box {
      width: 400px;
      flex-grow: 1;
      margin: 5px;
      padding: 8px;/* Takes remaining space */
      background: #f5f5f5;   /* Optional background */
    }

`;

export const Title = styled.h2`
    font-size: 25px;
    display: flex;
    justify-content: center;
    width: 300%;

`;