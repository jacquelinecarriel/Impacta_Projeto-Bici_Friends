import React from "react";
import * as C from "./style";
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import img from "./images/fofo.jpeg";
import {Content, Label, Title, ContainerText, ContainerText1} from "./style";
import Button from "../../components/Button";

const PedalFofo = () => {
    const navigate = useNavigate();
    const {signout} = useAuth();

    return(
        <C.ContainerWhite>
            <C.ContainerBlue>
                <C.Img><img src={img} alt="fofo"/></C.Img>
                 <Content>
                 <C.Title>Quem somos?</C.Title>

                 <C.ContainerText>
                 Pedalzinho fofo por SP 🚴🏻‍♀️💕 - As vezes rola, as vezes não (A cada 15 dias) 💘

                 <C.ContainerText1>
                                  Eai pessoaaaal, bora de Pedal Fofo! #38 Edição vem aí!

                                  Concentração 10h na Praça Roosevelt — Saímos às 11h
                                  Sábado 29/03/2025

                                  ️ Convidamos a todes para mais um pedal tranquilo e calmo, pode vir de bike Itaú ou a bike do seu tio, todes são muito bem-vindes!
                                   Aconselhamos o uso de capacete
                                   Se possível trazer câmara reserva e ferramentas básicas (caso ocorra algum pneu furado)

                                  O role é totalmente inclusivo, e não será tolerado qualquer tipo de preconceito e descriminação!

                </C.ContainerText1>
                </C.ContainerText>
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