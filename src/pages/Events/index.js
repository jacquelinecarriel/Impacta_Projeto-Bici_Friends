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
import img from "./images/mapa.png";
import useAuth from "../../hooks/useAuth";


 const CreateEvent = () => {

    const { createEvent } = useAuth();

    const navigate = useNavigate();
    const { signout } = useAuth();



     const [ data, setData ] = useState("");
     const [ nomeRota, setNomerota ] = useState("");
     const [ inicioRota, setInicio] = useState("");
     const [ fimRota, setFim] = useState("");
     const [ tempo, setTempo ] = useState("");
     const [error, setError] = useState("");

     const create = () => {
         if (!data | !nomeRota |!inicioRota |!fimRota | !tempo ) {
         setError("Crie o evento completo");
             return;
         }

         const res = createEvent(data, nomeRota, inicioRota, fimRota, tempo);

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
                         <C.Img><img src={img} alt="mapa" height="300" /></C.Img>

                      </Content>
                      <br></br>

                         <C.ContainerText>

                            <C.ContainerText2>
                                 <div class = "container">
                                     <div class = "box text-box">
                                        <C.Title>Crie seu Evento</C.Title>
                                         <br></br>
                                         <br></br>
                                         <br></br>
                                     <Input
                                         type="date"
                                         id="myDate"
                                         value="2025-06-01"
                                         value={data}
                                         onChange={(e) => [setData(e.target.value), setError("")]}
                                     />
                                     <br></br>
                                     <br></br>

                                     <Input
                                         type="nomeRota"
                                         placeholder="Digite o nome dessa Rota"
                                         value={nomeRota}
                                         onChange={(e) => [setNomerota(e.target.value), setError("")]}
                                     />
                                     <br></br>
                                     <br></br>
                                     <Input
                                         type="inicioRota"
                                         placeholder="Digite onde começa seu pedal"
                                         value={inicioRota}
                                         onChange={(e) => [setInicio (e.target.value), setError("")]}
                                     />
                                     <br></br>
                                     <br></br>
                                     <Input
                                         type="fimRota"
                                         placeholder="Digite onde termina seu pedal"
                                         value={fimRota}
                                         onChange={(e) => [setFim(e.target.value), setError("")]}
                                     />

                                      <br></br>
                                      <br></br>
                                      <Input
                                           type="time"
                                           id="myTime"
                                           value="22:15:00"
                                           value={tempo}
                                           onChange={(e) => [setTempo(e.target.value), setError("")]}
                                       />

                                         <br></br>
                                         <br></br>
                                         <div class="buttons">
                                         <ButtonBack  Text="Voltar"  />
                                         <ButtonCreate class="box button-box" Text="Criar o evento"  onClick={create}/>
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
 export default CreateEvent;