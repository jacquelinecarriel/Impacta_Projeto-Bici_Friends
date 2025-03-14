import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if(userToken && userToken) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );
            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const signin = (email, passwrod) => {
        const userStorage = JSON.parse(localStorage.getItem("users_db"))

        const hasUser = userStorage?.filter((user) => user.email === email);

        if(hasUser?.length) {
                if (hasUser[0].email === email && hasUser[0].password === passwrod) {
                    const token = Math.random().toString(36).substring(2);
                    localStorage.setItem("user_token", JSON.stringify({email, token}));
                    setUser({email, passwrod});
                    return;
                } else {
                    return "E-mail ou senha incorretos";
                }
            } else {
            return  "Usuario não cadastrado";
        }
    };

    const signup = (email, password) => {
        const  usersStorage = JSON.parse(localStorage.getItem("users_db"))

        const  hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            return "Já tem uma conta com esse email";
        }
        let newUser;

        if(usersStorage) {
            newUser = [...usersStorage, {email, password}];
        } else {
            newUser = [{ email, password}];
        }

        localStorage.setItem("users_db", JSON.stringify(newUser));
        return;
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
    <AuthContext.Provider
        value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
    );
};