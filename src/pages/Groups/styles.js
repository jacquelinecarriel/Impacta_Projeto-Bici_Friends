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
`;


export const Content = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    }
    .img_container {
        border: none;
        padding: 10px;
        height: auto;
        width: 400%;
        justify-content: right;
        align-items: center;
        padding-top: 0px;
        transform: translate(400%, -200%);
        border-radius: 10px;
        margin-top: -50px;
        float: right;
    }
    #fofo {
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }
    #lesmas {
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }
    #vespas {
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }

    .button {
        transform: translate(500%,-150%);

    }

`;



export const Top = styled.div`
    //left: 100%;
    transform: translate(850%, 5%);
    text-align: center;

    //width: 33.33%;
    //padding: 70px;
`;


export const Strong = styled.strong`
    cursor: pointer;

    a{
        text-decoration: none;
        color: #676767;
    }
`;

export const Title = styled.h2`
    font-size: 25px;
    display: flex;
    justify-content: center;
    width: 300%;

`;