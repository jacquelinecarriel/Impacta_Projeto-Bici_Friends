import React, { useState } from "react";
import * as C from "./styles"
import home from "../Home";
import {useNavigate} from "react-router-dom";
import maps from "../Maps";
import groups from "../Groups";
import {ContainerWhite, Content, LabelGroup} from "./styles";
import ButtonHome from "../../components/ButtonHome";
import img from "./images/home.png";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";


const HomeUser = () => {
    const navigate = useNavigate();
    const { signout } = useAuth();

    const [email, setEmail] = useState("");


    return (
            <C.ContainerWhite>
                <C.ContainerBlue>
                <C.Img><img src={img} alt="home"/></C.Img>
                <Content>
                    <br></br>
                        <ButtonHome Text="Encontre Grupos de Pedal" onClick={() => [navigate("/groups")]} />
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