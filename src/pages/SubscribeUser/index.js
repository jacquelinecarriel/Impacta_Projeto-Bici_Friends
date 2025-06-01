import React, { useState } from "react";
import * as C from "./styles"
import home from "../Home";
import Input from "../../components/Input";
import {useNavigate} from "react-router-dom";
import {ContainerWhite, Content, LabelGroup} from "./styles";
import ButtonHome from "../../components/ButtonHome";
import Button from "../../components/Button";
import img from "./images/colativo2.png";
import useAuth from "../../hooks/useAuth";
import ButtonSubscribe from "../../components/ButtonSubscribe";


const SubscribeUser = () => {

    const { createGroup } = useAuth();

    const navigate = useNavigate();
    const { signout } = useAuth();

    const [ nome, setNome ] = useState("");
    const [ cidade, setCidade ] = useState("");
    const [ descrição, setDescrição ] = useState("");
    const [error, setError] = useState("");

    const uploadSubscriber = () => {
            if (!nome | !cidade | ! descrição ) {
            setError("Complete sua inscrição");
                return;
            }

            const res = createGroup(nome, cidade, descrição);

            if(res) {
                setError(res);
                return;
            }
            navigate("/subscribeUp");
    }


        return(
            <C.ContainerWhite>
                <C.ContainerBlue>
                     <Content>
                        <C.Img><img src={img} alt="colativo2" height="300" /></C.Img>

                     </Content>
                     <br></br>

                        <C.ContainerText>

                           <C.ContainerText2>
                                <div class = "container">
                                    <div class = "box text-box">
                                       <C.Title>Crie seu grupo e marque roles !</C.Title>
                                        <br></br>
                                        <br></br>
                                        <br></br>

                                    <Input
                                        type="nome"
                                        placeholder="Digite o nome do grupo"
                                        value={nome}
                                        onChange={(e) => [setNome(e.target.value), setError("")]}
                                    />
                                    <br></br>
                                    <br></br>
                                    <Input
                                        type="cidade"
                                        placeholder="Digite a cidade em que você pedala"
                                        value={cidade}
                                        onChange={(e) => [setCidade (e.target.value), setError("")]}
                                    />
                                    <br></br>
                                    <br></br>
                                    <Input
                                        type="descrição"
                                        placeholder="Adicione uma descrição"
                                        value={descrição}
                                        onChange={(e) => [setDescrição(e.target.value), setError("")]}
                                    />
                                        <br></br>
                                        <br></br>
                                        Eu permito ser adionado ao grupo do whatsapp do Pedal?

                                       <div class="check">
                                            <Input class = "check"
                                                 type="checkbox"
                                                 id="myCheckyes"
                                                 onclick="myFunction()"
                                             />
                                       </div>

                                       <br></br>
                                       <ButtonSubscribe class="box button-box" Text="Inscreva-se"  onClick={uploadSubscriber}/>

                                   <div class="error">
                                        <C.labelError>{error}</C.labelError>
                                    </div>

                                    </div>
                                </div>


                            </C.ContainerText2>
                    </C.ContainerText>
                </C.ContainerBlue>
                    <C.Top>
                        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
                            Sair
                        </Button>
                    </C.Top>

            </C.ContainerWhite>

            )
        };
export default SubscribeUser;