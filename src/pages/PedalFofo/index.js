import React from "react";
import * as C from "./style";
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import img from "./images/fofo.jpeg";
import {Content} from "./style";
import Button from "../../components/Button";

const PedalFofo = () => {
    const navigate = useNavigate();
    const {signout} = useAuth();

    return(
        <C.ContainerWhite>
            <C.ContainerBlue>
                <C.Img><img src={img} alt="fofo"/></C.Img>
                {/*<img src={`${require('./images/fofo.jpeg')}`} id="fofo"/>*/}
                <Content>

                </Content>
            </C.ContainerBlue>
            <C.Top>
                <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
                    Sair
                </Button>
            </C.Top>
        </C.ContainerWhite>
    )
};

export default PedalFofo;