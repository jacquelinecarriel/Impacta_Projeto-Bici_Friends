import {createContext, useEffect, useState} from "react";

//export const AuthContext = createContext({});

    useEffect(() => {
            const subscribeStorage = localStorage.getItem("subscribe_db");

            if (subscribeStorage) {
                const hasUser = JSON.parse(subscribeStorage)?.filter(
                    (user) => user.email === JSON.parse(userToken).email
            );

                if (hasUser) setUser(hasUser[0]);
            }
    }, []);

export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState();

    const subscribe = (email) => {
    const subscribeStorage = JSON.parse(localStorage.getItem("subscribe_db"));

        const hasUser = subscribeStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("subscribe_db", JSON.stringify({ email }));
                setUser({ email });
                return;
            };
    };
};
