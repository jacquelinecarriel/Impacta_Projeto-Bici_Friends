import React from "react";
import * as C from "./styles"

const ButtonBack = ({ Text, Type = "button"}) => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <C.Button
            type={Type}
            onClick={handleGoBack}
            >
                {Text}
       </C.Button>
    );
};

export default ButtonBack;