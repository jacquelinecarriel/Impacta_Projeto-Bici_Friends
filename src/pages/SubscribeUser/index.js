import React, { useState } from "react";
import * as C from "./styles"
import home from "../Home";
import {useNavigate} from "react-router-dom";
import {ContainerWhite, Content, LabelGroup} from "./styles";
import ButtonHome from "../../components/ButtonHome";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";

const SubscribeUser = () => {

    const navigate = useNavigate();
    const { signout } = useAuth();


        return (
                    <C.ContainerWhite>
                        <C.ContainerBlue>
                        <Content>
                            <br></br>

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
export default SubscribeUser;