import React, { useState } from "react";
import * as C from "./styles"
import Input from "../../components/Input";
import Button from "../../components/Button";
import maps from "../Maps";
import {Content, LabelGroup} from "./styles";



const HomeUser = () => {
    // const navigate = useNavigate();
    const [grupos, setGroup] = useState("");


    return (
        <C.Container>
            <Content>
                <C.LabelGroup>{grupos}
                    <Button Text="Encontre Grupos de Pedal" onClick={maps} />
                    <Button Text="Crie sua Rota e convide usuário" onClick={maps} />
                    <Button Text="Combine Rotas com usuários" onClick={maps} />
                </C.LabelGroup>
        </Content>
        </C.Container>
    );
};
export default HomeUser;