import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Signin from "../Signin";
import {LabelSignup} from "./styles";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { signup } = useAuth();

    const handlSignup = () => {
        if(!email | !emailConf | !senha) {
            setError("Prencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os e-mails não são iguais");
            return;
        }

        const res = signup(email, senha);
        if (res) {
            setError(res);
            return;
        }

        alert("Usuario cadastrado com sucesso!");
        navigate("/");
    }


    return(
        <C.Container>
            <C.Label>Bici Friends 🚲 </C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Digite seu E-mail Ciclista"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                    type="email"
                    placeholder="Confirme seu email"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="Inscrever-se" onClick={handlSignup} />
                <C.LabelSignin>
                    Ja tem uma conta?
                        <C.Strong>
                            <Link to="/">&nbsp;Entre</Link>
                        </C.Strong>
                </C.LabelSignin>
        </C.Content>
    </C.Container>
    );
};

export default Signup