import React, { useState } from "react";
import * as C from "./styles"
import home from "../Home";
import Input from "../../components/Input";
import {useNavigate} from "react-router-dom";
import {ContainerWhite, Content, LabelGroup} from "./styles";
import ButtonHome from "../../components/ButtonHome";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import ButtonSubscribe from "../../components/ButtonSubscribe";


const SubscribeUser = () => {

    const navigate = useNavigate();
    const { signout } = useAuth();

    const [error, setError] = useState("");


        return(
                <C.ContainerWhite>
                    <C.ContainerBlue>
                     <Content>
                        <p>Pedalzinho fofo por SP 🚴🏻‍♀️💕 </p>

                     </Content>
                     <br></br>
                </C.ContainerBlue>

                 <C.ContainerText>
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
                                Nome <Input/>
                                <br></br>
                                <br></br>
                                Whatsapp <Input/>
                                 <br></br>
                                 <br></br>
                                 Sexo <Input/>
                                 <br></br>

                                 <C.labelError>{error}</C.labelError>


                           </div>
                        </div>
                    </C.ContainerText2>

                        </C.ContainerText>




                    <C.Top>
                        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
                            Sair
                        </Button>
                    </C.Top>
                </C.ContainerWhite>
            )
        };
export default SubscribeUser;