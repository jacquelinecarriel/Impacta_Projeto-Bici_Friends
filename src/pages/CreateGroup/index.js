import React, { useState } from "react";
import * as C from "./styles"
import home from "../Home";
import Input from "../../components/Input";
import {useNavigate} from "react-router-dom";
import {ContainerWhite, Content, LabelGroup} from "./styles";
import ButtonHome from "../../components/ButtonHome";
import Button from "../../components/Button";
import ButtonCreate from "../../components/ButtonCreate";
import ButtonBack from "../../components/ButtonBack";
import img from "./images/colativo2.png";
import useAuth from "../../hooks/useAuth";


const CreateGroup = () => {

    const { createGroup } = useAuth();

    const navigate = useNavigate();
    const { signout } = useAuth();

    const [ email, setEmail ] = useState("");
    const [ nome, setNome ] = useState("");
    const [ cidade, setCidade ] = useState("");
    const [ descrição, setDescrição ] = useState("");
    const [ imagem, setImagem ] = useState("");
    const [error, setError] = useState("");

    const create = () => {
            if (!email | !nome | !cidade | ! descrição | !imagem ) {
            setError("Complete sua inscrição");
                return;
            }

            const res = createGroup(email, nome, cidade, descrição, imagem);

            if(res) {
                setError(res);
                return;
            }
            navigate("/");
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
                                        type="email"
                                        placeholder="Digite o seu email"
                                        value={email}
                                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                                    />
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
                                        placeholder="Digite a cidade onde será seu pedal"
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
                                    <label for="imagem">Imagem do Grupo:</label>
                                    <Input
                                        type="file"
                                        id="imagem"
                                        accept="image/*"
                                        value={imagem}
                                        onChange={(e) => [setImagem(e.target.value), setError("")]}

                                    />
                                        <br></br>
                                        <br></br>
                                        <div class="buttons">
                                        <ButtonBack  Text="Voltar"  />
                                        <ButtonCreate class="box button-box" Text="Criar o Grupo"  onClick={(create)  => [navigate("/events")]} />
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <br></br>
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
export default CreateGroup;