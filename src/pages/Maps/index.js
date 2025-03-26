import React from 'react';
import img from './images/map.jpg';
import * as C from "./styles"
import Input from "../../components/Input";


// const AddMap = () => {
//
//     const [inicio, setInicio] = useState("");
//     const [fim, setFim] = useState("");
//     const [error, setError] = useState("");
//
//     const handleAddMap = () => {
//         if(!inicio | !fim) {
//             setError("Ponto de partida não pode ser o mesmo do fim");
//         }
//     }
// }

function Maps(){
    return(
        <C.Container>
            <div><C.Title>Sua rota menos solitária</C.Title></div>
            <C.Content>
                {/*<Input*/}
                {/*    type="inicio"*/}
                {/*    placeholder="Digite a partida da sua rota"*/}
                {/*    value={inicio}*/}
                {/*    onChange={(e) => [setInicio(e.target.value), setError("")]}*/}
                {/*/>*/}
            </C.Content>
        <div>
            <img src={img} alt="map"/>
        </div>
        </C.Container>
    )
}

export default Maps;