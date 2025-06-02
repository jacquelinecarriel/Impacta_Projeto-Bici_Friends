import React, { useState } from "react";
import * as C from "./styles"
import { useNavigate} from "react-router-dom";
import {ContainerWhite, Content} from "./styles";
import Button from "../../components/Button";
import ButtonCreate from "../../components/ButtonCreate";
import useAuth from "../../hooks/useAuth";
import img from "./images/fofo.jpeg";
import pedalFofo from "../PedalFofo";


const Groups = () => {
    const navigate = useNavigate();
    const { signout } = useAuth();


    return (
            <C.ContainerWhite>
                <C.ContainerBlue>
                <img src={`${require('./images/grupo.png')}`} id="grupo"/>
                  <Content>
                        <div className="img_container">
                            <img src={`${require('./images/fofo.jpeg')}`} id="fofo" onClick={() => [ navigate("/pedalFofo")]}/>
                        </div>

                        <div className="img_container">
                                <img src={`${require('./images/lesmas.jpeg')}`} id="lesmas"/>
                        </div>
                            <div className="img_container">
                                <img src={`${require('./images/vespas.png')}`} id="vespas"/>
                        </div>
                        <br></br>
                         <div className="button">
                            <ButtonCreate  Text="Crie seu grupo"   onClick={() => [navigate("/creategroup")]}/>

                         </div>

                  </Content>
                </C.ContainerBlue>
                <C.Top>
                <Button Text="Sair" onClick={() => [navigate("/pedalFofo")]}>
                    Sair
                </Button>
                </C.Top>
            </C.ContainerWhite>

        );
};
export default Groups;