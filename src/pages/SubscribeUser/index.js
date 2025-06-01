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

    const { subscribeDetail } = useAuth();

    const navigate = useNavigate();
    const { signout } = useAuth();

    const [ bairro, setBairro ] = useState("");
    const [ whatsapp, setWhatsapp ] = useState("");
    const [ pronome, setPronome ] = useState("");
    const [error, setError] = useState("");

    const uploadSubscriber = () => {
            if (!whatsapp | !pronome | ! bairro ) {
            setError("Adicione seu dados corretamente");
                return;
            }

            const res = subscribeDetail(whatsapp,pronome, bairro);

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
                                       <C.Title>Continue sua inscrição para receber todos os nossos proximos roles!</C.Title>
                                        <br></br>
                                        <br></br>
                                        <br></br>

                                    <Input
                                        type="whatsapp"
                                        placeholder="Digite seu whatsapp"
                                        value={whatsapp}
                                        onChange={(e) => [setWhatsapp(e.target.value), setError("")]}
                                    />
                                    <br></br>
                                    <br></br>
                                    <Input
                                        type="sexo"
                                        placeholder="Digite como gostaria de ser identificado"
                                        value={pronome}
                                        onChange={(e) => [setPronome (e.target.value), setError("")]}
                                    />
                                    <br></br>
                                    <br></br>
                                    <Input
                                        type="bairro"
                                        placeholder="Digite seu Bairro"
                                        value={bairro}
                                        onChange={(e) => [setBairro(e.target.value), setError("")]}
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

                                        <C.labelError>{error}</C.labelError>

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