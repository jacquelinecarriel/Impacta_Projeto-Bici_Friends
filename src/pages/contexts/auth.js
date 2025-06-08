import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");

        const usersStorage = localStorage.getItem("users_bd");
        const subscribeStorage = localStorage.getItem("subscribe_db");

        if (userToken && usersStorage && subscribeStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[0]);
        }
    }, []);


    const signin = (email, password) => {
            const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
            const hasUser = usersStorage?.filter((user) => user.email === email);

                if (hasUser?.length) {
                    if (hasUser[0].email === email && hasUser[0].password === password) {
                        const token = Math.random().toString(36).substring(2);

                        localStorage.setItem("user_token", JSON.stringify({ email, token }));
                        setUser({ email, password });
                        return;
                    } else {
                        return "E-mail ou senha incorretos";
                }
            } else {
                return "Usuário não cadastrado";
            }
        };



    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            return "Já tem uma conta com esse E-mail";
        }

        let newUser;

        if (usersStorage) {
            newUser = [...usersStorage, { email, password }];
        } else {
            newUser = [{ email, password }];
        }

        localStorage.setItem("users_bd", JSON.stringify(newUser));

        return;
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };


    const subscribe =  (email, nome) => {
    if (!email || !email.includes('@') || !email.includes('.')) {
            return "Por favor, adicione um e-mail válido";
        }
        const subscribeStorage = JSON.parse(localStorage.getItem("subscribe_db"));

        //Gera id sequencial para usuarios inscritos
        const id = subscribeStorage.length > 0 ? Math.max(...subscribeStorage.map(sub => sub.id)) + 1 : 1;

        //Não permite repetição de inscrição
        const emailRepeat = subscribeStorage.some(sub => sub.email === email);
        if (emailRepeat) {
            return "Email já está inscrito";
        }

        //Verifica se o usuario existe na base inicial
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
        const hasUser = usersStorage?.filter((user) => user.email !== email);
        if (hasUser[0].email === email) {
            return "Email não é cadastrado no site";
        }

        let newSubscriber;

        if (subscribeStorage) {
                newSubscriber = [...subscribeStorage, { email, nome, id }];
        } else {
            newSubscriber = [{ email, nome, id }];
        }

        localStorage.setItem("subscribe_db", JSON.stringify(newSubscriber));
        return "Inscrição realizada com sucesso!";

        const getSubscribers = () => {
            return JSON.parse(localStorage.getItem("subscribe_db")) || [];
        };

    };

    const createGroup = ( email, nome, cidade, descrição, imagem ) => {
        const groupStorage = JSON.parse(localStorage.getItem("group_db"));

        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
        const hasUser = usersStorage?.filter((user) => user.email !== email);
        if (hasUser[0].email === email) {
            return "Email não é cadastrado no site";
        }

        const id = groupStorage.length > 0 ? Math.max(...groupStorage.map(sub => sub.id)) + 1 : 1;

        const nomeRepeat = groupStorage.some(sub => sub.nome === nome);
        if (nomeRepeat) {
            return "Nome do grupo já existe na plataforma";
        }

        let newGroup;

        if(groupStorage) {
               newGroup = [...groupStorage, { email, nome, cidade, descrição, imagem , id }];
        } else {
            newGroup = [{email, nome, cidade, descrição, imagem,  id }]
        }

        localStorage.setItem("group_db", JSON.stringify(newGroup));
                return "Você criou seu grupo, parabéns!";

        };


    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signup, signout, subscribe, createGroup }}
        >
            {children}
        </AuthContext.Provider>
    );
};
