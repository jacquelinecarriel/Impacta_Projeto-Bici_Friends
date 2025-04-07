import React, { useState } from "react";
import * as C from "./styles"
import home from "../Home";
import {useNavigate} from "react-router-dom";

import maps from "../Maps";
import {ContainerWhite, Content, LabelGroup} from "./styles";
import ButtonHome from "../../components/ButtonHome";
import img from "./images/home.png";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";


const HomeUser = () => {
    const navigate = useNavigate();
    const { signout } = useAuth();



    return (
            <C.ContainerWhite>
                <C.ContainerBlue>
                <C.Img><img src={img} alt="home"/></C.Img>
                <Content>
                    {/*<C.LabelGroup>{grupos}*/}
                        <ButtonHome Text="Encontre Grupos de Pedal" onClick={() => [ navigate("/maps")]} />
                        <ButtonHome Text="Crie sua Rota e Convide" onClick={maps} />
                        <ButtonHome Text="Combine Rotas com usuários" onClick={maps} />
                    {/*</C.LabelGroup>*/}
                    </Content>
                </C.ContainerBlue>
                <C.Top>
                <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
                    Sair
                </Button>
                </C.Top>
            </C.ContainerWhite>

        );
};
export default HomeUser;