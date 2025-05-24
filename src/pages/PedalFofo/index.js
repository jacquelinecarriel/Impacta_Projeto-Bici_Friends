import React, { useState } from "react";
import * as C from "./style";
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import img from "./images/fofo.jpeg";
import Input from "../../components/Input";
import {Content, Label, Title, ContainerText, ContainerText1, ContainerText2} from "./style";
import ButtonSubscribe from "../../components/ButtonSubscribe";
import Button from "../../components/Button";
import subscribeuser from "../SubscribeUser"


const PedalFofo = () => {

    const { subscribe } = useAuth();
    const navigate = useNavigate();

    const { signout } = useAuth();

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");

    const [error, setError] = useState("");


    const handleSubscribe = () => {
        if (!email | !nome ) {
        setError("Adicione seu dados corretamente");
            return;
        }

        const res = subscribe(email, nome);

        if(res) {
            setError(res);
            return;
        }
        navigate("/homeuser");
    }

    return(
        <C.ContainerWhite>
            <C.ContainerBlue>
                <C.Img><img src={img} alt="fofo"/></C.Img>
                 <Content>
                 <C.Title>Quem somos?</C.Title>

                 <C.ContainerText>
                 <p>Pedalzinho fofo por SP 🚴🏻‍♀️💕 </p>

                 <C.ContainerText1>
                      <br></br>
                      Eai pessoaaaal, bora de Pedal Fofo! #38 Edição vem aí!
                      Concentração 10h na Praça Roosevelt
                      <br></br>
                      <br></br>
                      — Saímos às 11h do Sábado 29/03/2025
                       <br></br>
                       <br></br>
                      ️ Convidamos a todes para mais um pedal tranquilo e calmo, pode vir de bike Itaú ou a bike do seu tio, todes são muito bem-vindes!
                       Aconselhamos o uso de capacete
                       Se possível trazer câmara reserva e ferramentas básicas (caso ocorra algum pneu furado)

                      O role é totalmente inclusivo, e não será tolerado qualquer tipo de preconceito e descriminação!

                </C.ContainerText1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               <C.ContainerText2>
                <div class = "container">
                    <div class = "box text-box">
                        Quer fazer parte do nosso grupo e receber nossos proximos roles?
                        <br></br>
                        <br></br>
                        <Input
                            type="nome"
                            placeholder="Seu Nome Aqui"
                            value={nome}
                             onChange={(e) => [setNome(e.target.value), setError("")]}
                        />
                        <br></br>
                        <br></br>
                        <Input
                            type="email"
                            placeholder="Seu e-mail Aqui"
                            value={email}
                             onChange={(e) => [setEmail(e.target.value), setError("")]}
                        />
                         <C.labelError>{error}</C.labelError>
                         <br></br>
                         <br></br>

                        <ButtonSubscribe class="box button-box" Text="Inscreva-se"  onClick={(handleSubscribe)} />

                   </div>
                </div>
            </C.ContainerText2>

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